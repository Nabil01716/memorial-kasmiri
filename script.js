const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  toggleButton.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Easter Egg
document.addEventListener("keydown", (e) => {
  if (e.key === "k") {
    const easterEgg = document.createElement("div");
    easterEgg.classList.add("easter-egg");
    easterEgg.textContent = "Khaled Kashmiri was here 🐱";
    document.body.appendChild(easterEgg);
    easterEgg.style.display = "block";

    setTimeout(() => {
      easterEgg.remove();
    }, 3000);
  }
});