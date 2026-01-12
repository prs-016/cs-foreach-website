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
  if (!element) return () => {};

  // If a previous typewriter is running on this element, cancel it first
  if (typeof element.__typewriterCancel === 'function') {
    element.__typewriterCancel();
  }

  // If already typed and we don't want to rerun, return noop cancel
  if (element.dataset.typed === 'true') return () => {};

  let index = 0;
  let timeoutId = null;
  element.textContent = '';
  element.classList.add('typewriter-text');
  element.dataset.typing = 'true';
  element.dataset.typed = 'false';

  const cleanup = () => {
    if (timeoutId) clearTimeout(timeoutId);
    element.dataset.typing = 'false';
    // keep typed flag as-is; caller may set it when complete
    element.__typewriterCancel = null;
  };

  const type = () => {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      timeoutId = setTimeout(type, speed);
    } else {
      element.classList.add('complete');
      element.dataset.typing = 'false';
      element.dataset.typed = 'true';
      element.__typewriterCancel = null;
      // keep cursor blinking for 3s after finish, then hide
      if (element.__typewriterFinishTimeout) clearTimeout(element.__typewriterFinishTimeout);
      element.__typewriterFinishTimeout = setTimeout(() => {
        element.classList.add('finished');
        element.__typewriterFinishTimeout = null;
      }, 3000);
      if (callback) callback();
    }
  };

  // store cancel so callers can stop it when needed
  const cancel = () => {
    if (timeoutId) clearTimeout(timeoutId);
    if (element.__typewriterFinishTimeout) {
      clearTimeout(element.__typewriterFinishTimeout);
      element.__typewriterFinishTimeout = null;
    }
    element.dataset.typing = 'false';
    element.dataset.typed = 'false';
    element.classList.remove('complete');
    element.classList.remove('finished');
    element.__typewriterCancel = null;
  };

  element.__typewriterCancel = cancel;
  type();

  return cancel;
};