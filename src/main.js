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
