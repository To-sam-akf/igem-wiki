const TITLE_COLORS = [
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

function touching_title() {
  const title = document.querySelector(".main-title h1");
  if (!title) return;
  
  // 添加过渡效果
  title.style.transition = "color 1s ease";
  
  const randomColor = TITLE_COLORS[Math.floor(Math.random() * TITLE_COLORS.length)];
  title.style.color = randomColor;
}

// 正确的setInterval用法，不带括号
setInterval(touching_title, 2000);
