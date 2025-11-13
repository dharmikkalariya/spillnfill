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

// ScrollTrigger.create({
//   trigger: "#products",
//   start: "top center",
//   end: "bottom center",
//   scrub: 1,
//   onEnter: () => {
//     gsap.to(".bottle", {
//       scale: 0.6,
//       y: -120,
//       x: 0,
//       rotate: 0,
//       duration: 1.3,
//       ease: "power3.out",
//       onComplete: () => {
//         console.log("Bottle settled at Products section");
//       },
//     });
//   },
//   onLeaveBack: () => {
//     gsap.to(".bottle", {
//       scale: 1.5,
//       y: -400,
//       x: 0,
//       rotate: 0,
//       duration: 1.2,
//       ease: "power3.out",
//     });
//   },
// });

ScrollTrigger.create({
  trigger: "#products",
  start: "top center",
  end: "bottom center",
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
      opacity: 1, // reset opacity if coming back up
    });
  },
});

// 🧊 Extra trigger for hiding the bottle at the end of #product-section
ScrollTrigger.create({
  trigger: "#product-section",
  start: "bottom bottom", // when the end of inner section touches bottom of viewport
  onEnter: () => {
    gsap.to(".bottle", {
      opacity: 0,
      y: 100, // optional: move down while fading
      duration: 0.8,
      ease: "power2.out",
    });
  },
  onLeaveBack: () => {
    gsap.to(".bottle", {
      opacity: 1,
      y: -120, // reset position
      duration: 0.8,
      ease: "power2.out",
    });
  },
});

// PRODUCTS TO SUSTAINABILITY - Bottle fades out and settles hidden
ScrollTrigger.create({
  trigger: "#sustainability", // 👈 updated trigger
  start: "top center",
  end: "bottom center",
  scrub: 1,
  onEnter: () => {
    gsap.to(".bottle", {
      opacity: 0,
      scale: 0.3,
      duration: 1,
      ease: "power3.out",
      onComplete: () => {
        console.log("Bottle settled hidden at Sustainability");
      },
    });
  },
  onLeaveBack: () => {
    gsap.to(".bottle", {
      opacity: 1,
      scale: 0.6,
      y: -120,
      duration: 1,
      ease: "power3.out",
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
