const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  toggleButton.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});


// Easter Egg: Detect "cat"
let typedKeys = ""; // Store recently typed characters

document.addEventListener("keydown", (e) => {
  typedKeys += e.key.toLowerCase(); // Add the pressed key to the string

  // Check if the word "cat" is typed
  if (typedKeys.includes("cat")) {
    const easterEgg = document.createElement("div");
    easterEgg.classList.add("easter-egg");
    easterEgg.textContent = "Khaled Kashmiri was here 🐱";
    document.body.appendChild(easterEgg);
    easterEgg.style.display = "block";

    // Remove the message after 3 seconds
    setTimeout(() => {
      easterEgg.remove();
    }, 3000);

    typedKeys = ""; // Reset the string after triggering the easter egg
  }

  // Limit stored characters to avoid memory issues
  if (typedKeys.length > 20) {
    typedKeys = typedKeys.slice(-3); // Keep only the last 3 characters
  }
});
