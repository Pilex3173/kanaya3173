
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));

  // Mock fetch API for validator status
  const data = [
    { name: "Lumera", status: "active" },
    { name: "Empe", status: "syncing" },
    { name: "Zenchain", status: "active" },
    { name: "Helios", status: "pending" },
    { name: "Xos", status: "offline" }
  ];

  const container = document.getElementById("validatorStatus");
  data.forEach(validator => {
    const div = document.createElement("div");
    div.className = "status-card";
    div.innerHTML = `<h3>${validator.name}</h3><span class="badge ${validator.status}">${validator.status.charAt(0).toUpperCase() + validator.status.slice(1)}</span>`;
    container.appendChild(div);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const validators = document.querySelectorAll(".validator");

  validators.forEach(card => {
    const url = card.dataset.url;
    const statusEl = card.querySelector(".status-text");

    fetch(url, { method: "HEAD", mode: "no-cors" })
      .then(() => {
        statusEl.textContent = "✅ Online";
      })
      .catch(() => {
        statusEl.textContent = "🔴 Offline or Unreachable";
      });
  });
});
