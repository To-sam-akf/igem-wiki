// Create and animate particles
document.addEventListener("DOMContentLoaded", () => {
  const particlesContainer = document.createElement("div");
  particlesContainer.className = "particles";
  document.body.appendChild(particlesContainer);

  // Create particles
  for (let i = 0; i < 50; i++) {
    createParticle(particlesContainer);
  }

  // Add scroll animation for nav bar
  const navbar = document.querySelector(".nav-bar");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    console.log(currentScroll);

    if (currentScroll > lastScroll && currentScroll > 100) {
      navbar.style.transform = "translateY(-100%)";
    } else {
      navbar.style.transform = "translateY(0)";
    }

    lastScroll = currentScroll;
  });
});

function createParticle(container) {
  const particle = document.createElement("div");
  particle.style.position = "fixed";
  particle.style.width = "6px";
  particle.style.height = "6px";
  particle.style.background = "rgba(255, 255, 255, 0.8)";
  particle.style.borderRadius = "50%";
  particle.style.zIndex = "1";

  // Random starting position
  particle.style.left = Math.random() * 100 + "vw";
  particle.style.top = Math.random() * 100 + "vh";

  container.appendChild(particle);

  // Animate particle
  animateParticle(particle);
}

function animateParticle(particle) {
  const duration = 3000 + Math.random() * 5000;
  const keyframes = [
    { transform: `translate(0, 0)`, opacity: 0 },
    {
      transform: `translate(${Math.random() * 200 - 100}px, ${
        Math.random() * 200 - 100
      }px)`,
      opacity: 0.8,
    },
    {
      transform: `translate(${Math.random() * 200 - 100}px, ${
        Math.random() * 200 - 100
      }px)`,
      opacity: 0,
    },
  ];

  const animation = particle.animate(keyframes, {
    duration: duration,
    iterations: Number.POSITIVE_INFINITY,
    easing: "ease-in-out",
  });

  animation.onfinish = () => {
    particle.remove();
    createParticle(particle.parentElement);
  };
}
