document.addEventListener("DOMContentLoaded", () => {
  // Create sprite container
  const spriteContainer = document.createElement("div");
  spriteContainer.className = "spriteContainer";
  document.body.appendChild(spriteContainer);

  // Create multiple random sprites
  createRandomSprites(spriteContainer, 20);
});

function createRandomSprites(container, count) {
  for (let i = 0; i < count; i++) {
    // Create sprite element
    const sprite = document.createElement("div");
    sprite.className = "sprite";

    // Random position
    sprite.style.position = "fixed";
    sprite.style.left = Math.random() * 100 + "vw";
    sprite.style.top = Math.random() * 100 + "vh";

    // Random size (between 30px and 80px)
    const size = 30 + Math.random() * 50;
    sprite.style.width = size + "px";
    sprite.style.height = size + "px";

    // Random sprite image
    const spriteImages = ["sprite_1.png", "sprite_2.png"];
    const randomImage =
      spriteImages[Math.floor(Math.random() * spriteImages.length)];
    sprite.style.backgroundImage = `url('./pic/${randomImage}')`;
    sprite.style.backgroundSize = "cover";

    // Random opacity
    sprite.style.opacity = 0.3 + Math.random() * 0.5;

    // Random z-index (behind content)
    sprite.style.zIndex = "0";

    // Add to container
    container.appendChild(sprite);

    // Animate sprite
    animateSprite(sprite);
  }
}

function animateSprite(sprite) {
  // Random animation duration
  const duration = 20000 + Math.random() * 40000;

  // Random movement animation
  const keyframes = [
    { transform: `translate(0, 0) rotate(0deg)` },
    {
      transform: `translate(${Math.random() * 200 - 100}px, ${
        Math.random() * 200 - 100
      }px) rotate(${Math.random() * 360}deg)`,
    },
    {
      transform: `translate(${Math.random() * 200 - 100}px, ${
        Math.random() * 200 - 100
      }px) rotate(${Math.random() * 360}deg)`,
    },
    { transform: `translate(0, 0) rotate(360deg)` },
  ];

  // Apply animation
  const animation = sprite.animate(keyframes, {
    duration: duration,
    iterations: Infinity,
    easing: "ease-in-out",
    direction: "alternate",
  });
}
