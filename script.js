// Toggle mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("new-nav-links");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    toggle.classList.toggle("open");
  });
});

gsap.registerPlugin(ScrollTrigger);

// Initial bottle state (Hero section)
gsap.set(".bottle", {
  rotate: -25,
  scale: 0.8,
  y: 0,
  x: 0,
  opacity: 1,
  transformOrigin: "center center",
});

// HERO TO ABOUT - Bottle settles straight and centered
ScrollTrigger.create({
  trigger: "#about",
  start: "top center",
  end: "bottom center",
  scrub: 1, // Removes continuous scrubbing
  onEnter: () => {
    gsap.to(".bottle", {
      rotate: 0,
      scale: 0.8,
      y: -60,
      x: 0,
      duration: 1.2,
      ease: "power3.out", // Smooth settling ease
      onComplete: () => {
        console.log("Bottle settled at About section");
      },
    });
  },
  onLeaveBack: () => {
    gsap.to(".bottle", {
      rotate: -25,
      scale: 0.8,
      y: 0,
      x: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  },
});

// ABOUT TO BENEFITS - Bottle scales up and settles higher
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
      onComplete: () => {
        console.log("Bottle settled at Benefits section");
      },
    });
  },
  onLeaveBack: () => {
    gsap.to(".bottle", {
      rotate: 0,
      scale: 0.8,
      y: -60,
      x: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  },
});

// BENEFITS TO PRODUCTS - Bottle shrinks and settles above cards
ScrollTrigger.create({
  trigger: "#products",
  start: "top center",
  end: "+=100",
  scrub: 1,
  onEnter: () => {
    gsap.to(".bottle", {
      scale: 0.6,
      y: -120,
      x: 0,
      rotate: 0,
      duration: 1.3,
      ease: "power3.out",
      onComplete: () => {
        console.log("Bottle settled at Products section");
      },
    });
  },
  onLeaveBack: () => {
    gsap.to(".bottle", {
      scale: 1.5,
      y: -400,
      x: 0,
      rotate: 0,
      duration: 1.2,
      ease: "power3.out",
      opacity: 1, 
    });
  },
});



// Navigation functionality (unchanged)
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

// Intersection Observer for nav active states (unchanged)
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

form.addEventListener("submit", function (e) {
  e.preventDefault();
  form.reset();
  thankyou.style.display = "block";
  setTimeout(() => (thankyou.style.display = "none"), 4000);
});

// Name field — allow only letters and spaces
const nameInput = document.querySelector('input[type="text"]');
nameInput.addEventListener("input", function () {
  this.value = this.value.replace(/[^A-Za-z ]/g, "");
});

// Phone number field — allow only digits and limit to 10
const phoneInput = document.querySelector('input[type="tel"]');
phoneInput.addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "").slice(0, 10);
});

// =================================
// ==================fiiter links====================
// ==============================

// Get the modal elements
var modal = document.getElementById("myModal");
var modalTitle = document.getElementById("modal-title");
var modalBody = document.getElementById("modal-body");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// --- Content Definitions (UPDATED with full text) ---
var content = {
  "t-and-c": {
    title: "Terms & Conditions (T&C)",
    html: `
            <p><strong>Last updated: November 2025</strong></p>
            
            <h3>1. Introduction</h3>
            <p>Welcome to Spill N Fill (“Company”, “we”, “our”, “us”).</p>
            <p>These Terms and Conditions govern your access to and use of our website, products, and related services.</p>
            <p>By accessing or using this website, you agree to comply with and be bound by these Terms.</p>
            <p>If you do not agree, please discontinue using our services immediately.</p>
            
            <h3>2. Use of the Website</h3>
            <p>You agree to use this website only for lawful purposes.</p>
            <p>You must not use it to transmit or distribute viruses, spam, or harmful content.</p>
            <p>We reserve the right to restrict or terminate access to any user found misusing our website.</p>
            
            <h3>3. Product Information</h3>
            <p>We aim to ensure that product descriptions, images, and specifications on our website are accurate.</p>
            <p>However, minor variations in color, design, or packaging may occur.</p>
            <p>Prices and product availability are subject to change without prior notice.</p>
            
            <h3>4. Orders & Payments</h3>
            <p>All purchases made through our website or authorized partners are subject to acceptance and availability.</p>
            <p>We reserve the right to cancel or refuse any order at our discretion.</p>
            <p>Payment must be made in full before the order is dispatched.</p>
            
            <h3>5. Intellectual Property</h3>
            <p>All content, including text, graphics, logos, and images, are the property of Spill N Fill and protected by applicable copyright and trademark laws.</p>
            <p>You may not reproduce, distribute, or modify any content without our written consent.</p>
            
            <h3>6. Limitation of Liability</h3>
            <p>Spill N Fill shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our website, products, or services.</p>
            
            <h3>7. Third-Party Links</h3>
            <p>Our website may contain links to third-party websites for reference purposes.</p>
            <p>We are not responsible for the content, accuracy, or practices of such external sites.</p>
            
            <h3>8. Governing Law</h3>
            <p>These Terms are governed by and construed in accordance with the laws of India.</p>
            <p>Any disputes will be subject to the exclusive jurisdiction of courts located in [Your City/State].</p>
            
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
            <p>We may collect the following types of information:</p>
            <ul>
                <li>Personal details: name, email address, phone number, and address (when voluntarily provided).</li>
                <li>Usage data: pages visited, IP address, browser type, and time spent on our website.</li>
                <li>Transactional data: order history, payments, and preferences (if applicable).</li>
            </ul>
            
            <h3>3. How We Use Your Information</h3>
            <p>We use collected information to:</p>
            <ul>
                <li>Process orders and provide customer support.</li>
                <li>Improve our website, services, and user experience.</li>
                <li>Send promotional updates (only if you opt in).</li>
                <li>Comply with legal obligations.</li>
            </ul>
            
            <h3>4. Data Protection</h3>
            <p>We implement reasonable technical and organizational measures to protect your personal data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.</p>
            
            <h3>5. Sharing of Information</h3>
            <p>We do not sell or rent your personal information. We may share limited data with trusted third-party service providers (such as logistics or payment gateways) solely to fulfill transactions or improve services.</p>
            
            <h3>6. Cookies</h3>
            <p>Our website uses cookies to enhance browsing experience and analyze site traffic. You may disable cookies through your browser settings; however, certain website features may not function properly as a result.</p>
            
            <h3>7. Your Rights</h3>
            <p>You have the right to:</p>
            <ul>
                <li>Access, correct, or delete your personal data.</li>
                <li>Withdraw consent for marketing communications.</li>
                <li>Request details about how your data is used.</li>
            </ul>
            
            <h3>8. Retention of Data</h3>
            <p>We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.</p>
            
            <h3>9. Changes to This Policy</h3>
            <p>We may update this Privacy Policy periodically. All updates will be posted on this page with a revised “Last updated” date.</p>
            
            <h3>10. Contact Us</h3>
            <p>For any privacy-related inquiries, please contact:</p>
            <p>📧 support@Spill N Fill.com</p>
        `,
  },
};

// Function to display the modal with specific content
function openModal(type) {
  var selectedContent = content[type];
  if (selectedContent) {
    modalTitle.textContent = selectedContent.title;
    modalBody.innerHTML = selectedContent.html;
    modal.style.display = "block";
  }
}

// --- Event Listeners for Footer Links ---
document.getElementById("link-t-and-c").onclick = function (e) {
  e.preventDefault();
  openModal("t-and-c");
};

document.getElementById("link-disclaimer").onclick = function (e) {
  e.preventDefault();
  openModal("disclaimer");
};

document.getElementById("link-privacy").onclick = function (e) {
  e.preventDefault();
  openModal("privacy");
};

// --- Event Listeners to Close the Modal ---

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Optional: Close modal on pressing ESC key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modal.style.display === "block") {
    modal.style.display = "none";
  }
});
