// ========== Smooth Scroll for Internal Links ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ========== Dark Mode Toggle ==========
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌙 Dark Mode";
toggleBtn.style.position = "fixed";
toggleBtn.style.top = "15px";
toggleBtn.style.right = "15px";
toggleBtn.style.padding = "8px 12px";
toggleBtn.style.background = "#3b82f6";
toggleBtn.style.color = "#fff";
toggleBtn.style.border = "none";
toggleBtn.style.borderRadius = "6px";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.zIndex = "1000";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.innerText = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// ========== Project Cards Hover Effect ==========
document.querySelectorAll(".project").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.transition = "0.3s";
    card.style.boxShadow = "0 6px 12px rgba(0,0,0,0.2)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
    card.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
  });
});

// ========== Typewriter Effect for Header Subtitle ==========
const subtitle = document.querySelector("header p");
if (subtitle) {
  const text = subtitle.textContent;
  subtitle.textContent = "";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      subtitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50); // typing speed
    }
  }

  typeWriter();
}
