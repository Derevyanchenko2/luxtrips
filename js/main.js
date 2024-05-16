document.addEventListener('DOMContentLoaded', function () {
    // burger-menu
    document.querySelector(".open-menu-js").addEventListener("click", function() {
        var mobileMenuOverlay = document.querySelector(".mobileMenu-overlay");
        mobileMenuOverlay.classList.add("open");
        document.body.style.overflow = "hidden"; // Исправлено свойство overflow
    });

    document.querySelector(".mobileMenu-close").addEventListener("click", function() {
        var mobileMenuOverlay = document.querySelector(".mobileMenu-overlay");
        mobileMenuOverlay.classList.remove("open");
        document.body.style.overflow = "auto"; // Исправлено свойство overflow
    });

    // tab
    const tabsContainer = document.getElementById('travels-tabs');
    const tabContents = document.querySelectorAll('.travels-tab');

    if (tabsContainer) {
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
    }

    // slider
    const RatedSwiper = new Swiper('.travels-swiper', {
        slidesPerView: 3,
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


// calendar 
$(function() {
    function setTodayDateAsPlaceholder(inputId) {
        var today = new Date();
        var formattedDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        $(inputId).attr('placeholder', formattedDate);
    }

    setTodayDateAsPlaceholder('#start_date');
    setTodayDateAsPlaceholder('#end_date');

    $("#start_date, #end_date").datepicker({
        dateFormat: 'yy-mm-dd'
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("locationInput");
    const select = document.querySelector(".bookProducts-form__select");
    const options = select.querySelectorAll("option");

    input.addEventListener("click", function() {
        select.classList.toggle("open");
    });

    options.forEach(option => {
        option.addEventListener("click", function() {
            input.value = option.textContent;
            select.classList.remove("open");
        });
    });
});

// Time picker

document.addEventListener("DOMContentLoaded", function() {
    const select = document.querySelector(".time-picker__select");
    select.addEventListener("change", function() {
        const selectedTime = select.value;
        console.log("Selected time:", selectedTime);
    });
});


