// ── squidzombie.com — Work page screenshot showcase ────────────────
// A 3D coverflow: the active screenshot sits sharp up front, neighbours
// angle away blurred and dimmed, and a blurred copy of the active shot
// glows behind the stage. Flip with drag/swipe, arrows, dots, keys, or
// a sideways trackpad swipe. Positions are a continuous function of a
// (possibly fractional) index, so dragging moves everything with you.

(() => {
  const root = document.querySelector("[data-showcase]");
  if (!root) return;

  const stage = root.querySelector(".showcase-stage");
  const slides = [...root.querySelectorAll(".slide")];
  const glows = [...root.querySelectorAll(".showcase-glow img")];
  const caption = root.querySelector(".showcase-caption");
  const counter = root.querySelector(".showcase-count");
  const dotsWrap = root.querySelector(".showcase-dots");
  const prevBtn = root.querySelector(".showcase-nav.prev");
  const nextBtn = root.querySelector(".showcase-nav.next");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(pointer: fine)").matches;
  const n = slides.length;

  let active = 0;
  let glowSlot = 0;

  const dots = slides.map((_, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "showcase-dot";
    b.setAttribute("aria-label", `Show screenshot ${i + 1}`);
    b.addEventListener("click", () => go(i));
    dotsWrap.append(b);
    return b;
  });

  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const spacing = () => slides[0].offsetWidth * 0.62;

  // Place every slide for a fractional active position p.
  function layout(p, animate) {
    const sp = spacing();
    slides.forEach((slide, i) => {
      const off = i - p;
      const a = Math.abs(off);
      const x =
        Math.sign(off) * (Math.min(a, 1) * sp + Math.max(a - 1, 0) * sp * 0.55);
      const rot = clamp(off, -1, 1) * -34;
      const z = -Math.min(a, 3) * 170;
      const scale = 1 - Math.min(a, 2) * 0.07;
      const blur = Math.min(a, 2.5) * 2.6;
      const bright = 1 - Math.min(a, 2) * 0.32;
      slide.style.transition = animate ? "" : "none";
      slide.style.transform =
        `translateX(${x}px) translateZ(${z}px) rotateY(${rot}deg) scale(${scale})`;
      slide.style.filter = `blur(${blur}px) brightness(${bright})`;
      slide.style.opacity = a > 2.7 ? 0 : 1 - Math.max(0, a - 1.7) * 0.9;
      slide.style.zIndex = String(100 - Math.round(a * 10));
    });
  }

  function go(i) {
    active = clamp(i, 0, n - 1);
    layout(active, true);
    slides.forEach((s, k) => {
      const on = k === active;
      s.classList.toggle("is-active", on);
      s.setAttribute("aria-hidden", on ? "false" : "true");
      if (!on) s.querySelector(".slide-card").style.cssText = "";
    });
    dots.forEach((d, k) => d.setAttribute("aria-current", String(k === active)));
    prevBtn.disabled = active === 0;
    nextBtn.disabled = active === n - 1;

    caption.textContent = slides[active].dataset.caption;
    caption.classList.remove("swap");
    void caption.offsetWidth; // restart the fade-in
    caption.classList.add("swap");
    counter.textContent =
      `${String(active + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}`;

    // Crossfade the ambient glow to the new shot.
    const src = slides[active].querySelector("img").currentSrc ||
      slides[active].querySelector("img").src;
    const incoming = glows[(glowSlot = 1 - glowSlot)];
    const outgoing = glows[1 - glowSlot];
    incoming.src = src;
    incoming.classList.add("on");
    outgoing.classList.remove("on");
  }

  prevBtn.addEventListener("click", () => go(active - 1));
  nextBtn.addEventListener("click", () => go(active + 1));

  stage.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); go(active - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); go(active + 1); }
    if (e.key === "Home") { e.preventDefault(); go(0); }
    if (e.key === "End") { e.preventDefault(); go(n - 1); }
  });

  // Drag / swipe: the whole stage follows the pointer, with rubber-band
  // resistance past either end; release snaps to the nearest shot.
  let startX = null;
  let moved = false;
  let pos = 0;
  stage.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    startX = e.clientX;
    moved = false;
    pos = active;
    stage.setPointerCapture(e.pointerId);
  });
  stage.addEventListener("pointermove", (e) => {
    if (startX === null) {
      tilt(e);
      return;
    }
    const dx = e.clientX - startX;
    if (!moved && Math.abs(dx) < 6) return;
    if (!moved) {
      moved = true;
      stage.classList.add("dragging");
      resetTilt();
    }
    let p = active - dx / spacing();
    if (p < 0) p *= 0.3;
    if (p > n - 1) p = n - 1 + (p - (n - 1)) * 0.3;
    pos = p;
    layout(p, false);
  });
  const release = (e) => {
    if (startX === null) return;
    const dx = e.clientX - startX;
    startX = null;
    stage.classList.remove("dragging");
    if (!moved) {
      // A tap: bring a side shot to the front. Side shots sit behind the
      // stage plane in 3D, so browser hit-testing can't see them; pick
      // the frontmost card whose on-screen box contains the tap instead.
      const hit = slides
        .map((s, i) => ({
          i,
          r: s.querySelector(".slide-card").getBoundingClientRect(),
          z: Number(s.style.zIndex),
        }))
        .filter(({ r }) =>
          e.clientX >= r.left && e.clientX <= r.right &&
          e.clientY >= r.top && e.clientY <= r.bottom)
        .sort((a, b) => b.z - a.z)[0];
      go(hit ? hit.i : active);
      return;
    }
    let target = Math.round(pos);
    if (dx < -40 && target <= active) target = active + 1;
    if (dx > 40 && target >= active) target = active - 1;
    go(target);
  };
  stage.addEventListener("pointerup", release);
  stage.addEventListener("pointercancel", release);

  // Sideways trackpad swipes flip one shot per gesture.
  let wheelAcc = 0;
  let wheelLock = 0;
  stage.addEventListener(
    "wheel",
    (e) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      if (performance.now() < wheelLock) return;
      wheelAcc += e.deltaX;
      if (Math.abs(wheelAcc) > 45) {
        go(active + Math.sign(wheelAcc));
        wheelAcc = 0;
        wheelLock = performance.now() + 450;
      }
    },
    { passive: false },
  );

  // Desktop nicety: the front card tilts toward the cursor with a glare.
  function tilt(e) {
    if (!finePointer || reduceMotion) return;
    const card = slides[active].querySelector(".slide-card");
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    if (px < 0 || px > 1 || py < 0 || py > 1) return resetTilt();
    card.style.setProperty("--tx", `${(px - 0.5) * 14}deg`);
    card.style.setProperty("--ty", `${(0.5 - py) * 10}deg`);
    card.style.setProperty("--gx", `${px * 100}%`);
    card.style.setProperty("--gy", `${py * 100}%`);
    card.classList.add("tilting");
  }
  function resetTilt() {
    const card = slides[active].querySelector(".slide-card");
    card.style.cssText = "";
    card.classList.remove("tilting");
  }
  stage.addEventListener("pointerleave", resetTilt);

  addEventListener("resize", () => layout(active, false));

  layout(0, false);
  go(0);
  root.classList.add("ready");
})();
