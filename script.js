// loading animation
window.addEventListener('DOMContentLoaded', (event) => {
    const element = document.querySelector('.loading');
  
    const initialStyles = {
      opacity: getComputedStyle(element).opacity,
      transform: getComputedStyle(element).transform,
    };
  
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
  
    let start;
    function loadingAnim(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
  
      const animationProgress = Math.min(progress / 1000, 1);
  
      element.style.opacity = animationProgress;
      element.style.transform = `translateY(${(1 - animationProgress) * 20}px)`;

      if (animationProgress < 1) {
        requestAnimationFrame(loadingAnim);
      }
    }
  
    requestAnimationFrame(loadingAnim);
  });
  