document.addEventListener("DOMContentLoaded", function () {
  // ✅ Initialize EmailJS
  emailjs.init({
    publicKey: "olKDYQw41r4BxVOV6", // Replace with your EmailJS public key
  });

  const form = document.getElementById("contactForm");
  const statusMsg = document.getElementById("statusMsg");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    statusMsg.textContent = "📨 Sending...";

    const serviceID = "service_hhrnmdl";   // Replace with your EmailJS service ID
    const templateID = "template_9i50ra6"; // Replace with your EmailJS template ID

    emailjs
      .sendForm(serviceID, templateID, this)
      .then(() => {
        statusMsg.textContent = "✅ Request sent successfully! We'll contact you soon.";
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        statusMsg.textContent = "❌ Something went wrong. Please try again later.";
      });
  });
});
