// Toggle mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("new-nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      toggle.classList.toggle("open");
    });
  }
});

gsap.registerPlugin(ScrollTrigger);

// Create a matchMedia instance for Responsive Animations
let mm = gsap.matchMedia();

// =================================================
// 🖥️ DESKTOP ANIMATIONS (Min-width: 800px)
// =================================================
mm.add("(min-width: 800px)", () => {
  
  // Initial Bottle State (Desktop)
  gsap.set(".bottle", { rotate: -25, scale: 0.8, y: 0, x: 0, opacity: 1, transformOrigin: "center center" });

  // HERO TO ABOUT
  ScrollTrigger.create({
    trigger: "#about",
    start: "top center",
    end: "bottom center",
    scrub: 1,
    onEnter: () => {
      gsap.to(".bottle", {
<<<<<<< HEAD
        rotate: 0,
        scale: 0.8,
        y: -60,
        x: 0,
        duration: 1.2,
=======
        scale: 1.5, // mobile ma thodu ochu
        y: -400, // mobile screen mate fit
        duration: 1,
>>>>>>> ee36833 (Bottle scroll changes)
        ease: "power3.out",
      });
    },
    onLeaveBack: () => {
      gsap.to(".bottle", { rotate: -25, scale: 0.8, y: 0, x: 0, duration: 1.2, ease: "power3.out" });
    },
  });

  // ABOUT TO BENEFITS
  ScrollTrigger.create({
    trigger: "#benefits",
    start: "top center",
    end: "bottom center",
    scrub: 1,
    onEnter: () => {
      gsap.to(".bottle", {
        scale: 1.5,
        y: -400,
        x: 0,
        rotate: 0,
        duration: 1.5,
        ease: "power3.out",
      });
    },
    onLeaveBack: () => {
      gsap.to(".bottle", { rotate: 0, scale: 0.8, y: -60, x: 0, duration: 1.2, ease: "power3.out" });
    },
  });

  // BENEFITS TO PRODUCTS (Finishes early at +=300px)
  ScrollTrigger.create({
    trigger: "#products",
    start: "top center",
    end: "+=300", 
    scrub: 1,
    onEnter: () => {
      gsap.to(".bottle", {
        scale: 0.6,
        y: -120,
        x: 0,
        rotate: 0,
        duration: 1.3,
        ease: "power3.out",
      });
    },
    onLeaveBack: () => {
      gsap.to(".bottle", { scale: 1.5, y: -400, x: 0, rotate: 0, duration: 1.2, ease: "power3.out", opacity: 1 });
    },
  });

  // HIDE BOTTLE AT END OF PRODUCT SECTION
  ScrollTrigger.create({
    trigger: "#product-section",
    start: "bottom bottom",
    onEnter: () => {
      gsap.to(".bottle", { opacity: 0, y: 100, duration: 0.8, ease: "power2.out" });
    },
    onLeaveBack: () => {
      gsap.to(".bottle", { opacity: 1, y: -120, duration: 0.8, ease: "power2.out" });
    },
  });
  
  // SUSTAINABILITY (Fade out completely)
  ScrollTrigger.create({
    trigger: "#sustainability", 
    start: "top center",
    end: "bottom center",
    scrub: 1,
    onEnter: () => {
      gsap.to(".bottle", { opacity: 0, scale: 0.3, duration: 1, ease: "power3.out" });
    },
    onLeaveBack: () => {
      gsap.to(".bottle", { opacity: 1, scale: 0.6, y: -120, duration: 1, ease: "power3.out" });
    },
  });
});

// =================================================
// 📱 MOBILE / TABLET ANIMATIONS (Max-width: 799px)
// =================================================
mm.add("(max-width: 799px)", () => {

  // Initial State (Mobile: Smaller scale)
  gsap.set(".bottle", { rotate: -25, scale: 0.6, y: 0, x: 0, opacity: 1, transformOrigin: "center center" });

  // HERO TO ABOUT
  ScrollTrigger.create({
    trigger: "#about",
    start: "top center",
    end: "center center",
    scrub: 1,
    onEnter: () => {
      gsap.to(".bottle", {
        rotate: 0,
        scale: 0.6, 
        y: -30,     
        x: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    },
    onLeaveBack: () => {
      gsap.to(".bottle", { rotate: -25, scale: 0.6, y: 0, x: 0, duration: 1.2, ease: "power3.out" });
    },
  });

  // ABOUT TO BENEFITS
  ScrollTrigger.create({
    trigger: "#benefits",
    start: "top center",
    end: "center center",
    scrub: 1,
    onEnter: () => {
      gsap.to(".bottle", {
        scale: 0.9,  // Reduced scale so it doesn't cover text
        y: -150,     // Shorter travel distance
        x: 0,
        rotate: 0,
        duration: 1.5,
        ease: "power3.out",
      });
    },
    onLeaveBack: () => {
      gsap.to(".bottle", { rotate: 0, scale: 0.6, y: -30, x: 0, duration: 1.2, ease: "power3.out" });
    },
  });

  // BENEFITS TO PRODUCTS (Finishes early at +=150px)
  ScrollTrigger.create({
    trigger: "#products",
    start: "top center",
    end: "+=150", 
    scrub: 1,
    onEnter: () => {
      gsap.to(".bottle", {
        scale: 0.45, // Small enough to not block cards
        y: -60,
        x: 0,
        rotate: 0,
        duration: 1.3,
        ease: "power3.out",
      });
    },
    onLeaveBack: () => {
      gsap.to(".bottle", { scale: 0.9, y: -150, x: 0, rotate: 0, duration: 1.2, ease: "power3.out", opacity: 1 });
    },
  });

  // HIDE BOTTLE AT END OF PRODUCT SECTION
  ScrollTrigger.create({
    trigger: "#product-section",
    start: "bottom bottom",
    onEnter: () => {
      gsap.to(".bottle", { opacity: 0, y: 50, duration: 0.8, ease: "power2.out" });
    },
    onLeaveBack: () => {
      gsap.to(".bottle", { opacity: 1, y: -60, duration: 0.8, ease: "power2.out" });
    },
  });

  // SUSTAINABILITY
  ScrollTrigger.create({
    trigger: "#sustainability", 
    start: "top center",
    end: "bottom center",
    scrub: 1,
    onEnter: () => {
      gsap.to(".bottle", { opacity: 0, scale: 0.2, duration: 1, ease: "power3.out" });
    },
    onLeaveBack: () => {
      gsap.to(".bottle", { opacity: 1, scale: 0.45, y: -60, duration: 1, ease: "power3.out" });
    },
  });
});

// =================================================
// NAVIGATION & UTILITIES (Unchanged)
// =================================================

// Navigation functionality
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      document
        .querySelectorAll(".nav-links li")
        .forEach((li) => li.classList.remove("active"));
      link.parentElement.classList.add("active");

      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Intersection Observer for nav active states
const sections = document.querySelectorAll("section[id]");
const observerOptions = {
  root: null,
  rootMargin: "-50% 0px -50% 0px",
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const currentId = entry.target.getAttribute("id");

      navLinks.forEach((link) => {
        const linkHref = link.getAttribute("href").substring(1);
        if (linkHref === currentId) {
          link.parentElement.classList.add("active");
        } else {
          link.parentElement.classList.remove("active");
        }
      });
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));

// Refresh ScrollTrigger on window resize
window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});

ScrollTrigger.addEventListener("refresh", () =>
  console.log("ScrollTrigger refreshed")
);

// Form Thank you MSG
const form = document.getElementById("contactForm");
const thankyou = document.querySelector(".thankyou");

if(form && thankyou) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.reset();
    thankyou.style.display = "block";
    setTimeout(() => (thankyou.style.display = "none"), 4000);
  });
}

// Name field — allow only letters and spaces
const nameInput = document.querySelector('input[type="text"]');
if(nameInput) {
  nameInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^A-Za-z ]/g, "");
  });
}

// Phone number field — allow only digits and limit to 10
const phoneInput = document.querySelector('input[type="tel"]');
if(phoneInput) {
  phoneInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "").slice(0, 10);
  });
}

// =================================
// ==================fiiter links====================
// ==============================

// Get the modal elements
var modal = document.getElementById("myModal");
var modalTitle = document.getElementById("modal-title");
var modalBody = document.getElementById("modal-body");
var span = document.getElementsByClassName("close")[0];

// --- Content Definitions ---
var content = {
  "t-and-c": {
    title: "Terms & Conditions (T&C)",
    html: `
            <p><strong>Last updated: November 2025</strong></p>
            <h3>1. Introduction</h3>
            <p>Welcome to Spill N Fill (“Company”, “we”, “our”, “us”). These Terms and Conditions govern your access to and use of our website, products, and related services.</p>
            <h3>2. Use of the Website</h3>
            <p>You agree to use this website only for lawful purposes. You must not use it to transmit or distribute viruses, spam, or harmful content.</p>
            <h3>3. Product Information</h3>
            <p>We aim to ensure that product descriptions, images, and specifications on our website are accurate. However, minor variations in color, design, or packaging may occur.</p>
            <h3>4. Orders & Payments</h3>
            <p>All purchases made through our website or authorized partners are subject to acceptance and availability. We reserve the right to cancel or refuse any order at our discretion.</p>
            <h3>5. Intellectual Property</h3>
            <p>All content, including text, graphics, logos, and images, are the property of Spill N Fill and protected by applicable copyright and trademark laws.</p>
            <h3>6. Limitation of Liability</h3>
            <p>Spill N Fill shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our website, products, or services.</p>
            <h3>7. Third-Party Links</h3>
            <p>Our website may contain links to third-party websites for reference purposes. We are not responsible for the content, accuracy, or practices of such external sites.</p>
            <h3>8. Governing Law</h3>
            <p>These Terms are governed by and construed in accordance with the laws of India.</p>
            <h3>9. Changes to Terms</h3>
            <p>We may update these Terms from time to time. Continued use of our website indicates acceptance of the revised Terms.</p>
        `,
  },
  disclaimer: {
    title: "Disclaimer",
    html: `
            <p><strong>Last updated: November 2025</strong></p>
            <p>The information provided on the Spill N Fill website is for general informational purposes only. While we strive to ensure the accuracy and reliability of our content, Spill N Fill makes no warranties or representations of any kind regarding completeness, accuracy, or suitability of the information.</p>
            <h3>Product Disclaimer</h3>
            <p>Our products are manufactured under quality standards. However, individual experiences may vary, and product performance can differ based on storage, usage, and environmental conditions.</p>
            <h3>Health Disclaimer</h3>
            <p>Our products are intended for hydration purposes only. We do not make any claims regarding medical or health benefits. For any health-related concerns, always consult a certified healthcare professional.</p>
            <h3>External Links Disclaimer</h3>
            <p>Any external links provided on this website are for convenience only. Spill N Fill does not control, endorse, or take responsibility for the content or reliability of third-party websites.</p>
            <h3>Liability</h3>
            <p>Under no circumstances shall Spill N Fill, its affiliates, partners, or employees be held liable for any direct or indirect loss or damage resulting from the use of our website or products.</p>
        `,
  },
  privacy: {
    title: "Privacy Policy",
    html: `
            <p><strong>Last updated: November 2025</strong></p>
            <h3>1. Introduction</h3>
            <p>Spill N Fill respects your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or interact with our services.</p>
            <h3>2. Information We Collect</h3>
            <p>We may collect personal details (name, email, phone) and usage data (pages visited, IP address) to improve our services.</p>
            <h3>3. How We Use Your Information</h3>
            <p>We use collected information to process orders, improve our website, and send promotional updates (only if you opt in).</p>
            <h3>4. Data Protection</h3>
            <p>We implement reasonable technical and organizational measures to protect your personal data from unauthorized access.</p>
            <h3>5. Sharing of Information</h3>
            <p>We do not sell or rent your personal information. We may share limited data with trusted third-party service providers solely to fulfill transactions.</p>
            <h3>6. Cookies</h3>
            <p>Our website uses cookies to enhance browsing experience. You may disable cookies through your browser settings.</p>
            <h3>7. Your Rights</h3>
            <p>You have the right to access, correct, or delete your personal data.</p>
            <h3>8. Contact Us</h3>
            <p>For any privacy-related inquiries, please contact: support@SpillNFill.com</p>
        `,
  },
};

// Function to display the modal with specific content
function openModal(type) {
  var selectedContent = content[type];
  if (selectedContent && modalTitle && modalBody && modal) {
    modalTitle.textContent = selectedContent.title;
    modalBody.innerHTML = selectedContent.html;
    modal.style.display = "block";
  }
}

// --- Event Listeners for Footer Links ---
const linkTerms = document.getElementById("link-t-and-c");
if(linkTerms) linkTerms.onclick = function (e) { e.preventDefault(); openModal("t-and-c"); };

const linkDisclaimer = document.getElementById("link-disclaimer");
if(linkDisclaimer) linkDisclaimer.onclick = function (e) { e.preventDefault(); openModal("disclaimer"); };

const linkPrivacy = document.getElementById("link-privacy");
if(linkPrivacy) linkPrivacy.onclick = function (e) { e.preventDefault(); openModal("privacy"); };

// --- Event Listeners to Close the Modal ---

// When the user clicks on <span> (x), close the modal
if(span) {
  span.onclick = function () {
    modal.style.display = "none";
  };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Optional: Close modal on pressing ESC key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modal && modal.style.display === "block") {
    modal.style.display = "none";
  }
});
