document.addEventListener("DOMContentLoaded", () => {
  /**
   * Animate an array of elements with a fade-in effect.
   * @param {NodeList} elements - List of elements to animate.
   * @param {number} delay - Initial delay before starting animation.
   * @param {number} duration - Duration of the fade-in animation.
   */
  const animateElements = (elements, delay = 300, duration = 600) => {
      elements.forEach((element, index) => {
          setTimeout(() => {
              element.style.transition = `opacity ${duration}ms`;
              element.style.opacity = "1";
          }, delay + index * 100);
      });
  };

  /**
   * Set up an IntersectionObserver to handle visibility and fade-in effect on scroll.
   */
  const handleScrollFadeIn = () => {
      const fadeInElements = document.querySelectorAll(".fade-in");
      const observerOptions = {
          root: null,
          rootMargin: "0px",
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.style.transition = "opacity 500ms";
                  entry.target.style.opacity = "1";
                  observer.unobserve(entry.target); // Stop observing once element is visible
              }
          });
      }, observerOptions);

      fadeInElements.forEach(element => {
          observer.observe(element);
      });
  };

  // Animate navigation links and hero content
  const navLinks = document.querySelectorAll(".navLinks li a");
  const heroElements = document.querySelectorAll(".heroContent .logo, .heroContent button");
  animateElements(navLinks);
  animateElements(heroElements);

  // Initialize the fade-in on scroll using IntersectionObserver
  handleScrollFadeIn();
});
