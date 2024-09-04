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








document.addEventListener("DOMContentLoaded", () => {
  // Get all <li> elements with the data-video attribute
  const functionalityItems = document.querySelectorAll("[data-video]");
  
  // Get all video elements
  const videoPlayers = Array.from(document.querySelectorAll("video"));

  // Get the specific <h4> element for "Gestão de Competições"
  const gestaoHeading = document.querySelector('h4.font-bold');

  // Mute all videos initially
  videoPlayers.forEach(video => video.muted = true);

  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to play a video if it's in the viewport and not already playing
  function playVideo(videoPlayer) {
    if (videoPlayer.paused) {
      setTimeout(() => {
        videoPlayer.play().catch(error => {
          console.error('Failed to play video:', error);
        });
      }, 150); // Delay to avoid play() rejection
    }
  }

  // Function to handle video sequence
  function playNextVideo(index) {
    if (index < videoPlayers.length) {
      const nextVideo = videoPlayers[index];
      nextVideo.scrollIntoView({ behavior: 'smooth' });
      
      // Play the next video after scrolling into view
      setTimeout(() => {
        playVideo(nextVideo);
      }, 300); // Delay to ensure smooth scroll finishes
    }
  }

  // When a video ends, play the next video
  videoPlayers.forEach((videoPlayer, index) => {
    videoPlayer.addEventListener("ended", () => {
      playNextVideo(index + 1);
    });
  });

  // Function to handle scroll and start the first video when the specific <h4> comes into view
  function handleScroll() {
    if (isInViewport(gestaoHeading) && videoPlayers[0].paused) {
      // Start playing the first video when <h4> is in view
      playVideo(videoPlayers[0]);
      window.removeEventListener('scroll', handleScroll); // Remove scroll event listener once the first video starts
    }
  }

  // Listen for scroll events to trigger the first video play
  window.addEventListener('scroll', handleScroll);
});
