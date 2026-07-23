// Professional interactions and state management
document.addEventListener("DOMContentLoaded", () => {
  const newsletterForm = document.getElementById("newsletterForm");
  const formFeedback = document.getElementById("formFeedback");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector(".form-input");
      
      if (emailInput.value.trim() !== "") {
        formFeedback.textContent = "Thank you for subscribing to updates!";
        emailInput.value = "";
        
        setTimeout(() => {
          formFeedback.textContent = "";
        }, 4000);
      }
    });
  }

  // Smooth scrolling configuration for navigation anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
