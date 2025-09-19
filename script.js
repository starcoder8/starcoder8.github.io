// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// Dark Mode Toggle
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌙 Dark Mode";
toggleBtn.style.position = "fixed";
toggleBtn.style.top = "10px";
toggleBtn.style.right = "10px";
toggleBtn.style.padding = "8px";
toggleBtn.style.background = "#3b82f6";
toggleBtn.style.color = "#fff";
toggleBtn.style.border = "none";
toggleBtn.style.borderRadius = "5px";
toggleBtn.style.cursor = "pointer";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.innerText = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});
