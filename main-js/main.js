document.addEventListener("DOMContentLoaded", function () {
  (function () {
    const root = document.getElementById("nav-root");
    if (!root) return;

    // Simple path resolution that works for both local and GitHub Pages
    const getBasePath = () => {
      const currentPath = window.location.pathname;
      const repoName = 'DMDINSTALLATIONS'; // Change this to your actual repo name
      
      // Check if we're on GitHub Pages with repository name in URL
      if (currentPath.includes(repoName)) {
        return `/${repoName}`;
      }
      // For custom domain or local development
      return '';
    };

    const basePath = getBasePath();
    const resolvePath = (relative) => {
      // Remove leading slash if basePath is empty to make it relative
      if (basePath === '' && relative.startsWith('/')) {
        return relative.substring(1);
      }
      return `${basePath}${relative}`;
    };

    // --- Create Navbar ---
    const nav = document.createElement("nav");
    nav.className = "navbar";
    nav.setAttribute("aria-label", "Main Navigation");

    // --- Brand Logo ---
    const brand = document.createElement("a");
    brand.className = "brand";
    brand.href = resolvePath("/index.html");

    const img = document.createElement("img");
    img.src = resolvePath("/Images/DMD-Logo.png");
    img.alt = "DMD INSTALLATIONS";
    img.className = "logo";
    brand.appendChild(img);
    nav.appendChild(brand);

    // --- Service Button ---
    const servicebtn = document.createElement("a");
    servicebtn.className = "service-btn";
    servicebtn.href = resolvePath("/Booking-Page/HTML/Booking-Page.html");
    servicebtn.textContent = "Request Service";
    nav.appendChild(servicebtn);

    // --- Navigation Links ---
    const ul = document.createElement("ul");
    ul.className = "nav-list";

    const items = [
      { text: "Home", href: resolvePath("/index.html") },
      { text: "Services", href: resolvePath("/Services-Page/HTML/Services.html") },
      { text: "About", href: resolvePath("/About-Page/HTML/About.html") },
      { text: "Contact", href: resolvePath("/Booking-Page/HTML/Booking-Page.html") },
    ];

    items.forEach((it) => {
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

    // --- Highlight current page ---
    const currentPath = window.location.pathname;
    nav.querySelectorAll(".nav-link").forEach((link) => {
      const linkHref = link.getAttribute("href");
      // Compare paths for active page highlighting
      if (currentPath.endsWith(linkHref) || 
          (currentPath === '/' && linkHref.endsWith('/index.html')) ||
          (currentPath === basePath + '/' && linkHref.endsWith('/index.html')) ||
          (currentPath.endsWith('/') && linkHref.endsWith('/index.html'))) {
        link.classList.add("active");
        Object.assign(link.style, {
          pointerEvents: "none",
          cursor: "default",
          boxShadow: "inset 2px 3px 7px #427cafff, inset -3px -3px 7px rgba(0,0,0,0.47)",
          padding: "10px 15px",
          borderRadius: "50px",
          backgroundColor: "transparent",
          color: "#839af6",
        });
      }
    });
  })();

  // --- Hamburger Menu Logic ---
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav-list");
  const mobileOverlay = document.querySelector(".mobile-overlay");
  const body = document.body;

  // Initialize hamburger menu functionality
  if (hamburger && navList && mobileOverlay) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("active");
      navList.classList.toggle("active");
      mobileOverlay.classList.toggle("active");
      body.classList.toggle("menu-open");
    });

    mobileOverlay.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navList.classList.remove("active");
      this.classList.remove("active");
      body.classList.remove("menu-open");
    });

    // Close menu when clicking on nav links
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navList.classList.remove("active");
        mobileOverlay.classList.remove("active");
        body.classList.remove("menu-open");
      });
    });

    // Close menu on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        hamburger.classList.remove("active");
        navList.classList.remove("active");
        mobileOverlay.classList.remove("active");
        body.classList.remove("menu-open");
      }
    });
  }

  // --- Back to Top Button ---
  const backToTopBtn = document.createElement("button");
  backToTopBtn.id = "backToTop";
  backToTopBtn.className = "back-to-top";
  backToTopBtn.innerHTML = "↑";
  backToTopBtn.setAttribute("aria-label", "Back to top");
  document.body.appendChild(backToTopBtn);

  // Show/hide back to top button based on scroll position
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  // Smooth scroll to top when button is clicked
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth" 
    });
  });

  // Keyboard accessibility for back to top button
  backToTopBtn.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      window.scrollTo({ 
        top: 0, 
        behavior: "smooth" 
      });
    }
  });
});