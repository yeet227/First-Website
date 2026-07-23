// Add a simple interactive behavior when the button is clicked
document.addEventListener("DOMContentLoaded", () => {
  const actionBtn = document.getElementById("actionBtn");
  const feedback = document.getElementById("feedback");

  let clickCount = 0;

  actionBtn.addEventListener("click", () => {
    clickCount++;
    if (clickCount === 1) {
      feedback.textContent = "Thanks for clicking! You've activated the static site script.";
    } else {
      feedback.textContent = `Button clicked ${clickCount} times!`;
    }
  });
});
