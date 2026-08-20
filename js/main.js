// ── squidzombie.com — abyss particles + watchful squid ──────────────

// --- Bioluminescent particle field -------------------------------------
const canvas = document.getElementById("abyss");
const ctx = canvas.getContext("2d");

let particles = [];
const mouse = { x: -9999, y: -9999 };

const PALETTE = ["#3dfbd8", "#8aff5a", "#8a6cff", "#5ad8ff"];

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

  requestAnimationFrame(tick);
}

// --- The squid's eyes follow your cursor -------------------------------
const pupils = document.querySelectorAll(".pupil");
const squid = document.getElementById("squid");

function aimEyes(clientX, clientY) {
  if (!squid) return;
  const rect = squid.getBoundingClientRect();
  const scale = rect.width / 200; // viewBox width

  for (const pupil of pupils) {
    const eyeX = Number(pupil.dataset.eyeX);
    const eyeY = Number(pupil.dataset.eyeY);
    const eyeScreenX = rect.left + eyeX * scale;
    const eyeScreenY = rect.top + eyeY * scale;

    const angle = Math.atan2(clientY - eyeScreenY, clientX - eyeScreenX);
    const reach = 8; // how far the pupil roams inside the eye
    pupil.setAttribute("cx", eyeX + Math.cos(angle) * reach);
    pupil.setAttribute("cy", eyeY + Math.sin(angle) * reach);
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
});

resize();
spawnParticles();
tick();
