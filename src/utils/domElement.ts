/**
 * 检查根元素是否处于暗色模式
 */
export function rootInDarkMode(): boolean {
  if (typeof document !== "undefined") {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  }
  return false;
}

/**
 * 设置主题
 */
export function setTheme(theme: "light" | "dark"): void {
  if (typeof document !== "undefined" && typeof localStorage !== "undefined") {
    const root = document.documentElement;
    
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    
    localStorage.setItem("theme", theme);
  }
}

/**
 * 获取当前主题
 */
export function getTheme(): "light" | "dark" {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme") as "light" | "dark";
  }
  
  if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  
  return "light";
}