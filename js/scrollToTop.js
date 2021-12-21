export default function initScrollToTopLogic() {
  const rootElement = document.documentElement
  const target = document.querySelector(".happiness");
  const scrollToTopBtn = document.querySelector(".scrollToTopBtn");

  scrollToTopBtn.addEventListener('click', () => {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  const callback = (entries, observer) => {
    // The callback will return an array of entries, even if you are only observing a single item
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Show button
        scrollToTopBtn.classList.add('showBtn')
      } else {
        // Hide button
        scrollToTopBtn.classList.remove('showBtn')
      }
    });
  }

  const observer = new IntersectionObserver(callback);
  observer.observe(target);
}