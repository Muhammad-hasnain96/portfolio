/**
 * Portfolio Interactive Scripts
 * Muhammad Hasnain - Software & Embedded Systems Engineer
 */

document.addEventListener("DOMContentLoaded", () => {

  /* ===================================================================
     1. REALISTIC TYPEWRITER EFFECT (TYPE -> PAUSE -> BACKSPACE -> LOOP)
     =================================================================== */
  const roles = [
    "Software & Embedded Systems Engineer",
    "IoT & Hardware Specialist (ESP32)",
    "Computer Vision Developer (OpenCV)",
    "Full-Stack Web Engineer (Vue 3 / Flask)"
  ];

  const typingElement = document.querySelector(".typing");
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 75;
  const deletingSpeed = 40;
  const pauseEnd = 1800;
  const pauseStart = 400;

  function typeEffect() {
    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
      delay = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = pauseStart;
    }

    setTimeout(typeEffect, delay);
  }

  typeEffect();

  /* ===================================================================
     2. PARTICLES BACKGROUND CONFIGURATION
     =================================================================== */
  if (typeof particlesJS !== "undefined" && document.getElementById("particles-js")) {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 55,
          density: { enable: true, value_area: 850 }
        },
        color: { value: "#38bdf8" },
        shape: { type: "circle" },
        opacity: {
          value: 0.35,
          random: true
        },
        size: {
          value: 2.5,
          random: true
        },
        line_linked: {
          enable: true,
          distance: 140,
          color: "#38bdf8",
          opacity: 0.18,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true
        },
        modes: {
          grab: {
            distance: 130,
            line_linked: { opacity: 0.4 }
          }
        }
      },
      retina_detect: true
    });
  }

  /* ===================================================================
     3. SCROLLSPY (ACTIVE NAVBAR LINK HIGHLIGHT)
     =================================================================== */
  const sections = document.querySelectorAll("section, header");
  const navLinks = document.querySelectorAll(".nav-link");

  function highlightNavOnScroll() {
    const scrollPosition = window.scrollY + 140;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (id && scrollPosition >= top && scrollPosition < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNavOnScroll, { passive: true });
  highlightNavOnScroll();

  /* ===================================================================
     4. DYNAMIC COPYRIGHT YEAR
     =================================================================== */
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});