document.addEventListener('DOMContentLoaded', function() {
  const background = document.querySelector('.animated-background');
  
  // 创建浮动气泡
  function createBubbles(count) {
    for (let i = 0; i < count; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      
      // 随机尺寸
      const size = Math.random() * 100 + 50;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      
      // 随机位置
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      bubble.style.left = `${posX}%`;
      bubble.style.top = `${posY}%`;
      
      // 随机移动距离
      const moveX = (Math.random() - 0.5) * 100;
      const moveY = (Math.random() - 0.5) * 100;
      bubble.style.setProperty('--move-x', `${moveX}px`);
      bubble.style.setProperty('--move-y', `${moveY}px`);
      
      // 随机动画持续时间
      const duration = Math.random() * 20 + 10;
      bubble.style.setProperty('--duration', `${duration}s`);
      
      background.appendChild(bubble);
    }
  }
  
  // 初始化气泡
  createBubbles(15);
});