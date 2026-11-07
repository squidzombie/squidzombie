// ── squidzombie.com — abyss particles + the watchful seal ───────────

// --- Bioluminescent particle field -------------------------------------
const canvas = document.getElementById("abyss");
const ctx = canvas.getContext("2d");

let particles = [];
const mouse = { x: -9999, y: -9999 };

const PALETTE = ["#3dfbd8", "#8aff5a", "#8a6cff", "#5ad8ff"];
// With reduced motion the plankton is drawn once and holds still.
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function spawnParticles() {
  const count = Math.min(120, Math.floor((canvas.width * canvas.height) / 14000));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: 0.6 + Math.random() * 2.2,
    drift: 0.15 + Math.random() * 0.45,      // upward, like plankton rising
    sway: Math.random() * Math.PI * 2,
    swaySpeed: 0.004 + Math.random() * 0.012,
    color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
    alpha: 0.25 + Math.random() * 0.5,
  }));
}

function tick() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const p of particles) {
    p.sway += p.swaySpeed;
    p.y -= p.drift;
    p.x += Math.sin(p.sway) * 0.4;

    // gentle repulsion from the cursor — the deep avoids you
    const dx = p.x - mouse.x;
    const dy = p.y - mouse.y;
    const dist2 = dx * dx + dy * dy;
    if (dist2 < 120 * 120) {
      const dist = Math.sqrt(dist2) || 1;
      const push = (120 - dist) / 120;
      p.x += (dx / dist) * push * 2.5;
      p.y += (dy / dist) * push * 2.5;
    }

    if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
    if (p.x < -10) p.x = canvas.width + 10;
    if (p.x > canvas.width + 10) p.x = -10;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.alpha;
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  if (!reduceMotion) requestAnimationFrame(tick);
}

// --- The seal's squid keeps an eye on your cursor ---------------------
// Pupils sit in the mark's eye holes; they roam a little toward the
// pointer, and settle back as it gets close to the eye.
const pupils = document.querySelectorAll(".seal .pupil");
const REACH = 1.1; // in mark units: eye hole r 3.3, pupil r 1.95

function aimEyes(clientX, clientY) {
  for (const pupil of pupils) {
    const eyeX = Number(pupil.dataset.eyeX);
    const eyeY = Number(pupil.dataset.eyeY);
    const m = pupil.parentNode.getScreenCTM();
    if (!m) continue;
    const eye = new DOMPoint(eyeX, eyeY).matrixTransform(m);
    const dx = clientX - eye.x;
    const dy = clientY - eye.y;
    const pull = Math.min(1, Math.hypot(dx, dy) / 40);
    const angle = Math.atan2(dy, dx);
    pupil.setAttribute("cx", (eyeX + Math.cos(angle) * REACH * pull).toFixed(2));
    pupil.setAttribute("cy", (eyeY + Math.sin(angle) * REACH * pull).toFixed(2));
  }
}

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  aimEyes(e.clientX, e.clientY);
});

window.addEventListener("mouseout", () => {
  mouse.x = -9999;
  mouse.y = -9999;
});

window.addEventListener("resize", () => {
  resize();
  spawnParticles();
  if (reduceMotion) tick();
});

resize();
spawnParticles();
tick();
