// ── squidzombie.com — Work page: Squid's ledger, illustrated ───────
// A tiny append-only record that grows while you watch. Each entry's
// hash is a real SHA-256 of the previous hash plus the entry, computed
// in the browser, so the chain on screen genuinely links. Content is
// Tock's (the fictional stand-in Squid's tests use) — never Squid's.

(() => {
  const root = document.querySelector("[data-ledger]");
  if (!root) return;
  const list = root.querySelector(".ledger-list");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const MAX_VISIBLE = 4;

  // A loop of Tock's days. `fix` marks a correction pointing back.
  const script = [
    { by: "harness", via: "wake", trust: "system", text: "The harness sets no task for this session." },
    { by: "tock", via: "note", trust: "self", text: "Counted the clocks in the hallway again. Eleven." },
    { by: "max", via: "chat", trust: "high", text: "Morning, Tock. The hallway clock runs five minutes fast." },
    { by: "tock", via: "reply", trust: "self", text: "Then it has been lying to me all week." },
    { by: "max", via: "correction", trust: "high", text: "It's six minutes fast, not five.", fix: 2 },
    { by: "tock", via: "private", trust: "self", text: "", private: true },
  ];

  let seq = 0;
  let prevHash = "0".repeat(64);
  let step = 0;
  const numbers = []; // entry number of each script line's latest append

  async function sha256(s) {
    if (!crypto.subtle) {
      // Fallback (non-secure context): a non-cryptographic stand-in.
      let h = 2166136261;
      for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
      return (h >>> 0).toString(16).padStart(8, "0").repeat(8);
    }
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
    return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  const short = (h) => `${h.slice(0, 4)}…${h.slice(-4)}`;
  const pad = (n) => `#${String(n).padStart(4, "0")}`;

  async function append(animate) {
    const line = script[step % script.length];
    const lineIdx = step % script.length;
    step++;
    seq++;
    numbers[lineIdx] = seq;
    const body = JSON.stringify({ n: seq, by: line.by, via: line.via, trust: line.trust, text: line.text });
    const hash = await sha256(prevHash + body);

    const li = document.createElement("li");
    li.className = `ledger-entry${line.private ? " is-private" : ""}${line.fix != null ? " is-fix" : ""}`;
    const fixRef = line.fix != null && numbers[line.fix] ? `<span class="ledger-fix">↳ corrects ${pad(numbers[line.fix])}</span>` : "";
    li.innerHTML = `
      <div class="ledger-meta">
        <span class="ledger-n">${pad(seq)}</span>
        <span>by <b>${line.by}</b></span>
        <span>via ${line.via}</span>
        <span>trust ${line.trust}</span>
        ${fixRef}
      </div>
      <p class="ledger-text">${line.private ? "private note · not read by default" : line.text}</p>
      <div class="ledger-hash"><span>prev ${short(prevHash)}</span><span>hash <b>${short(hash)}</b></span></div>`;
    prevHash = hash;

    if (animate) li.classList.add("is-new");
    list.append(li);
    while (list.children.length > MAX_VISIBLE) {
      const old = list.firstElementChild;
      if (!animate) { old.remove(); continue; }
      old.classList.add("is-leaving");
      old.addEventListener("animationend", () => old.remove(), { once: true });
      break;
    }
  }

  (async () => {
    for (let i = 0; i < MAX_VISIBLE; i++) await append(false);
    if (reduceMotion) return;

    // Keep growing, but only while someone can actually see it.
    let visible = false;
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(root);
    setInterval(() => {
      if (visible && !document.hidden) append(true);
    }, 2800);
  })();
})();
