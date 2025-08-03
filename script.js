document.addEventListener("DOMContentLoaded", () => {
  // === Initialize AOS scroll animations ===
  AOS.init({
    once: true,
    duration: 800,
    easing: 'ease-in-out',
  });

  // === Smooth scroll to contact section (if needed) ===
  const contactLink = document.querySelector('a[href="#contact"]');
  if (contactLink) {
    contactLink.addEventListener("click", (e) => {
      e.preventDefault();
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // === Form Validation (Optional future form support) ===
  const form = document.getElementById("inquiryForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.querySelector('input[name="name"]');
      const email = form.querySelector('input[name="email"]');
      const message = form.querySelector('textarea');

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        alert("Please fill in all fields.");
        return;
      }

      alert("✅ Inquiry received! We'll contact you soon.");
      form.reset();
    });
  }

  // === AI Chatbot Fallback Loader (if embed failed) ===
  const chatbotScript = document.getElementById("chatbase-script");
  setTimeout(() => {
    if (!window.Chatbase || typeof Chatbase !== "object") {
      console.warn("Chatbot failed to load. Retrying...");
      const newScript = document.createElement("script");
      newScript.src = "https://www.chatbase.co/embed.min.js";
      newScript.defer = true;
      newScript.id = "chatbase-script";
      document.body.appendChild(newScript);
    }
  }, 4000);
});
