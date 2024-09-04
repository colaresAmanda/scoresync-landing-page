// document.addEventListener('DOMContentLoaded', () => {
//   const ulElement = document.getElementById('fadeInUl') as HTMLElement

//   function handleScroll() {
//     const ulPosition = ulElement.getBoundingClientRect().top
//     const screenPosition = window.innerHeight / 1.3

//     if (ulPosition < screenPosition) {
//       ulElement.classList.add('opacity-100', 'translate-y-0', 'animate-fadeIn')
//     }
//   }

//   window.addEventListener('scroll', handleScroll)
// })

const btn = document.getElementById('hamburger-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('active');
  // menu.classList.toggle('close');

  if (menu.classList.contains('h-[4.5rem]')) {
    menu.classList.remove('h-[4.5rem]', 'md:h-20');
    menu.classList.add('h-screen');
  } else {
    menu.classList.remove('h-screen');
    menu.classList.add('h-[4.5rem]', 'md:h-20');
  }
});










document.addEventListener("DOMContentLoaded", () => {
  // const listItems = document.querySelectorAll("ul li");
  const listItems = document.querySelectorAll("#modalitiesList li");

  function animateOnScroll() {
    listItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      // Logic for different screen sizes
      if (window.matchMedia("(min-width: 1024px)").matches) {
        // Large screens (lg)
        if (rect.top <= windowHeight * 0.8) {
          item.classList.add("translate-y-0", "opacity-100");
          item.classList.remove("translate-y-32", "opacity-0");
        } else {
          item.classList.add("translate-y-32", "opacity-0");
          item.classList.remove("translate-y-0", "opacity-100");
        }
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        // Medium screens (md)
        if (rect.top <= windowHeight * 0.9) {
          item.classList.add("translate-y-0", "opacity-100");
          item.classList.remove("translate-y-32", "opacity-0");
        } else {
          item.classList.add("translate-y-32", "opacity-0");
          item.classList.remove("translate-y-0", "opacity-100");
        }
      } else {
        // Small screens (sm)
        if (rect.top <= windowHeight) {
          item.classList.add("translate-y-0", "opacity-100");
          item.classList.remove("translate-y-32", "opacity-0");
        } else {
          item.classList.add("translate-y-32", "opacity-0");
          item.classList.remove("translate-y-0", "opacity-100");
        }
      }
    });
  }

  // Initial check
  animateOnScroll();

  // Listen to scroll events
  window.addEventListener("scroll", animateOnScroll);
});

