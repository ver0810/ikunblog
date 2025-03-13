// 主题切换逻辑
export function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return; // 防止在没有切换按钮的页面报错
  
  const body = document.body;
  const html = document.documentElement;

  // 检测系统主题偏好
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  
  // 同步按钮状态与当前主题
  const currentTheme = html.getAttribute("data-theme") || 
                       (html.classList.contains("dark-theme") ? "dark" : "light");
  
  if (currentTheme === "dark") {
    body.classList.add("dark-theme");
    themeToggle.classList.add("dark");
  } else {
    body.classList.remove("dark-theme");
    themeToggle.classList.remove("dark");
    html.setAttribute("data-theme", "light");
  }

  themeToggle.addEventListener("click", () => {
    // 切换主题类
    body.classList.toggle("dark-theme");
    html.classList.toggle("dark-theme");
    themeToggle.classList.toggle("dark");

    // 保存当前主题设置并更新根元素属性
    const newTheme = body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    html.setAttribute("data-theme", newTheme);
  });
  
  // 监听系统主题变化
  prefersDarkScheme.addEventListener("change", (e) => {
    // 只有在用户没有明确设置主题时才跟随系统
    if (!localStorage.getItem("theme")) {
      if (e.matches) {
        body.classList.add("dark-theme");
        html.classList.add("dark-theme");
        themeToggle.classList.add("dark");
        html.setAttribute("data-theme", "dark");
      } else {
        body.classList.remove("dark-theme");
        html.classList.remove("dark-theme");
        themeToggle.classList.remove("dark");
        html.setAttribute("data-theme", "light");
      }
    }
  });
}

// 如果作为独立脚本加载，自动初始化
if (typeof document !== 'undefined') {
  document.addEventListener("DOMContentLoaded", initThemeToggle);
}