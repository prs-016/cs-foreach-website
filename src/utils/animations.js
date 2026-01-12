// Scroll Reveal Animation
export const initScrollReveal = () => {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  
  const revealOnScroll = () => {
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
        element.classList.add('revealed');
      }
    });
  };

  // Initial check
  revealOnScroll();
  
  // Add scroll listener
  window.addEventListener('scroll', revealOnScroll);
  
  // Cleanup function
  return () => window.removeEventListener('scroll', revealOnScroll);
};

// Typewriter Effect
export const typewriterEffect = (element, text, speed = 100, callback) => {
  if (!element) return;
  
  let index = 0;
  element.textContent = '';
  element.classList.add('typewriter-text');
  
  const type = () => {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    } else {
      element.classList.add('complete');
      if (callback) callback();
    }
  };
  
  type();
};