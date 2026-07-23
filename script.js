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

  // Direct In-Page File Download Handler
  const downloadTriggers = document.querySelectorAll(".download-trigger");
  downloadTriggers.forEach(btn => {
    btn.addEventListener("click", () => {
      const filename = btn.getAttribute("data-filename");
      let fileContent = "";
      let mimeType = "text/plain";

      // Mock sample content template mapping for quick browser downloading
      if (filename === "index.html") {
        fileContent = document.documentElement.outerHTML;
        mimeType = "text/html";
      } else if (filename === "styles.css") {
        fileContent = "/* DevNexus Generated Stylesheet */\n:root { --primary: #0284c7; }";
        mimeType = "text/css";
      } else if (filename === "script.js") {
        fileContent = "// DevNexus Runtime Logic Layer\nconsole.log('Loaded script successfully.');";
        mimeType = "application/javascript";
      }

      // Create an invisible anchor element to prompt native browser download locally
      const blob = new Blob([fileContent], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const downloadLink = document.createElement("a");
      
      downloadLink.href = url;
      downloadLink.download = filename;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      
      // Cleanup object URL resource
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(url);
    });
  });
});
