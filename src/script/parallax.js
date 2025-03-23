document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".main-title h1");
  const mainContent = document.querySelector(".main-content");

  let lastScrollY = window.scrollY;
  let ticking = false;

  const updateParallax = () => {
    const scrolled = window.scrollY;
    const viewportHeight = window.innerHeight;
    const titleRect = title.getBoundingClientRect();

    // Calculate the scroll percentage
    const scrollPercentage = Math.min(scrolled / viewportHeight, 1);

    // Apply parallax effect
    const translateY = scrolled * 0.5; // Adjust the 0.5 value to control the parallax speed
    const opacity = 1 - 0.5 * scrollPercentage;

    // Update title position and opacity
    title.style.transform = `translate(-50%, calc(-50% + ${translateY}px))`;
    title.style.opacity = opacity;

    lastScrollY = scrolled;
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });

  // Initial update
  updateParallax();
});
