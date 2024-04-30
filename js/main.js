document.addEventListener('DOMContentLoaded', function () {
  // burger-menu
  document.querySelector(".open-menu-js").addEventListener("click", function() {
      var mobileMenuOverlay = document.querySelector(".mobileMenu-overlay");
      mobileMenuOverlay.classList.add("open");
      document.body.style.overflowX = "hidden";
  });

  document.querySelector(".mobileMenu-close").addEventListener("click", function() {
      var mobileMenuOverlay = document.querySelector(".mobileMenu-overlay");
      mobileMenuOverlay.classList.remove("open");
      document.body.style.overflowX = "auto";
  });

  // tab
  const tabsContainer = document.getElementById('travels-tabs');
  const tabContents = document.querySelectorAll('.travels-tab');

  tabsContainer.addEventListener('click', function (event) {
      event.preventDefault();
      const target = event.target.closest('a');

      if (target) {
          const tabId = target.getAttribute('data-target');

          tabContents.forEach(content => {
              content.style.display = 'none';
          });

          document.getElementById(tabId).style.display = 'block';

          tabsContainer.querySelectorAll('a').forEach(tab => {
              tab.classList.remove('active');
          });

          target.classList.add('active');
      }
  });
  tabsContainer.querySelector('a').click();

  // slider
  const RatedSwiper = new Swiper('.travels-swiper', {
    //   loop: true,
      slidesPerView: 3,
    //   spaceBetween: 30,
      navigation: {
          nextEl: '.travels-slider-btn',
      },
  });

  // reviews-slider 
  const ReviewsSwiper = new Swiper('.reviews-swiper', {
      observer: true,
      observeParents: true,
      slidesPerView: "auto",
      spaceBetween: 94,
      speed: 800,
      navigation: {
          nextEl: '.custom-slider-btn',
      },
      pagination: {
          el:  ".custom-pagination",
      },
  });
});

console.log('hello');