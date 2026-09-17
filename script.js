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
    "IoT & Telemetry Specialist (ESP32)",
    "Computer Vision Developer (OpenCV)",
    "Full-Stack Web Engineer (Vue 3 / Flask)"
  ];

  const typingElement = document.querySelector(".typing");
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 80;
  const deletingSpeed = 45;
  const pauseEnd = 2000;
  const pauseStart = 450;

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
     2. SUBTLE CONSTELLATION PARTICLES CONFIGURATION
     =================================================================== */
  if (typeof particlesJS !== "undefined" && document.getElementById("particles-js")) {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 45,
          density: { enable: true, value_area: 900 }
        },
        color: { value: ["#38bdf8", "#818cf8"] },
        shape: { type: "circle" },
        opacity: {
          value: 0.35,
          random: true
        },
        size: {
          value: 2,
          random: true
        },
        line_linked: {
          enable: true,
          distance: 135,
          color: "#38bdf8",
          opacity: 0.15,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.2,
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
            distance: 140,
            line_linked: { opacity: 0.35 }
          }
        }
      },
      retina_detect: true
    });
  }

  /* ===================================================================
     3. SCROLLSPY (ACTIVE NAVBAR PILL HIGHLIGHT)
     =================================================================== */
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-item, .nav-link");

  function highlightNavOnScroll() {
    const scrollPosition = window.scrollY + 200;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (id && scrollPosition >= top && scrollPosition < top + height) {
        navItems.forEach((link) => {
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