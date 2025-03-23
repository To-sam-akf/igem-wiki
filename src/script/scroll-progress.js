// 获取DOM元素
const progressBar = document.getElementById("progressBar");
const percentageCircle = document.getElementById("percentageCircle");

// 获取分子元素
const co2 = document.getElementById("co2");
const light = document.getElementById("light");
const n2 = document.getElementById("n2");
const alkane = document.getElementById("alkane");
const protein = document.getElementById("protein");
const gold = document.getElementById("gold");

// 初始化输出产物的透明度
alkane.style.opacity = "0.2";
protein.style.opacity = "0.2";
gold.style.opacity = "0.2";

// 监听滚动事件
window.addEventListener("scroll", () => {
  // 计算滚动百分比
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;

  // 更新进度条宽度
  progressBar.style.width = `${scrollPercentage}%`;

  // 更新百分比文本
  percentageCircle.textContent = `${Math.round(scrollPercentage)}%`;

  // 根据滚动百分比更新进度条颜色
  if (scrollPercentage < 30) {
    progressBar.style.backgroundColor = "#26c6da"; // 青色
  } else if (scrollPercentage < 60) {
    progressBar.style.backgroundColor = "#2bb673"; // 绿色
  } else if (scrollPercentage < 90) {
    progressBar.style.backgroundColor = "#5cb82b"; // 浅绿色
  } else {
    progressBar.style.backgroundColor = "#d4af37"; // 金色
  }

  // 更新分子透明度
  // 输入分子逐渐消失
  co2.style.opacity = Math.max(1 - scrollPercentage / 30, 0.2).toString();
  light.style.opacity = Math.max(1 - scrollPercentage / 50, 0.2).toString();
  n2.style.opacity = Math.max(1 - scrollPercentage / 70, 0.2).toString();

  // 输出产物逐渐出现
  alkane.style.opacity = Math.min((scrollPercentage - 30) / 30, 1).toString();
  if (scrollPercentage < 30) alkane.style.opacity = "0.2";

  protein.style.opacity = Math.min((scrollPercentage - 50) / 30, 1).toString();
  if (scrollPercentage < 50) protein.style.opacity = "0.2";

  gold.style.opacity = Math.min((scrollPercentage - 70) / 30, 1).toString();
  if (scrollPercentage < 70) gold.style.opacity = "0.2";
});

// 初始化滚动位置
window.dispatchEvent(new Event("scroll"));
