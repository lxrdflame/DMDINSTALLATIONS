document.addEventListener("DOMContentLoaded", function () {
  // --- Detect current page and highlight active link ---
  const currentPage = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

  (function () {
    const root = document.getElementById("nav-root");
    if (!root) return; // stop if nav-root doesn't exist

    // --- Detect environment (GitHub Pages or local) ---
    const base = window.location.hostname.includes("github.io")
      ? "/DMDInstallations" // <-- replace MyWebsite with your actual GitHub repo name
      : ".."; // local relative path

    const nav = document.createElement("nav");
    nav.className = "navbar";
    nav.setAttribute("aria-label", "Main Navigation");

    // --- Brand / Logo ---
    const brand = document.createElement("a");
    brand.className = "brand";
    brand.href = `${base}/index.html`;

    const img = document.createElement("img");
    img.src = `${base}/Images/INSTALLATIONS-2.png`;
    img.alt = "DMD INSTALLATIONS";
    img.className = "logo";
    brand.appendChild(img);
    nav.appendChild(brand);

    // --- Service Button ---
    const servicebtn = document.createElement("a");
    servicebtn.className = "service-btn";
    servicebtn.href = `${base}/Contact-Page/HTML/Contact.html`;
    servicebtn.textContent = "Request Service";
    nav.appendChild(servicebtn);

    // --- Navigation List ---
    const ul = document.createElement("ul");
    ul.className = "nav-list";

    const items = [
      { text: "Home", href: `${base}/index.html` },
      { text: "Services", href: `${base}/Services-Page/HTML/Services.html` },
      { text: "About", href: `${base}/About-Page/HTML/About.html` },
      { text: "Contact", href: `${base}/Contact-Page/HTML/Contact.html` }
    ];

    items.forEach(it => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.className = "nav-link";
      a.href = it.href;
      a.textContent = it.text;
      li.appendChild(a);
      ul.appendChild(li);
    });

    nav.appendChild(ul);
    root.appendChild(nav);

    // --- Optional: toggle logic (only if you have a mobile toggle) ---
    const toggle = document.getElementById("nav-toggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const expanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!expanded));
        nav.classList.toggle("open");
      });
    }

    // --- Active link handling ---
    nav.addEventListener("click", e => {
      const link = e.target.closest(".nav-link");
      if (!link) return;
      nav.querySelectorAll(".nav-link").forEach(x => x.classList.remove("active"));
      link.classList.add("active");
    });
  })();
});
