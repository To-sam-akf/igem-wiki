function touching_title() {
  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "pink",
    "brown",
    "black",
    "white",
  ];
  const title = document.querySelector(".main-title h1");
  title.addEventListener("click", () => {
    // Generate a new random color each time the title is clicked
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    title.style.color = randomColor;
  });
}

touching_title();
