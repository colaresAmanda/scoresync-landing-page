document.addEventListener("DOMContentLoaded", () => {
    const ulElement = document.getElementById("fadeInUl") as HTMLElement;
  
    function handleScroll() {
      const ulPosition = ulElement.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
  
      if (ulPosition < screenPosition) {
        ulElement.classList.add("opacity-100", "translate-y-0", "animate-fadeIn");
      }
    }
  
    window.addEventListener("scroll", handleScroll);
  });
  