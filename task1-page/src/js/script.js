"use strict";

window.addEventListener("DOMContentLoaded", function () {
    // SLIDER

    const dots = document.querySelectorAll(".feedback__slider-indicators li"),
        slider = document.querySelector(".feedback__slider"),
        slide = document.querySelector(".feedback__slide"),
        width = window.getComputedStyle(slide).width,
        marginRight = window.getComputedStyle(slide).marginRight;

    let offset = 0;
    let slideIndex = 1;

    dots[0].style.cssText = `
		width: 30px;
		background-color: #0f7bff;
	`;

    dots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
            const slideTo = e.target.getAttribute("data-slide-to");
            console.log(slideTo);
            slideIndex = slideTo;
            offset =
                (deleteNotDigits(width) + deleteNotDigits(marginRight)) *
                (slideIndex - 1);

            slider.style.transform = `translateX(-${offset}px)`;

            dots.forEach((dot) => {
                dot.style.cssText = `
				width: 20px;
				background-color: #d4d4d4;
				`;
            });
            dots[slideIndex - 1].style.cssText = `
				width: 30px;
				background-color: #0f7bff;
			`;
        });
    });

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, "");
    }

    // BUTTON UP

    const btnUp = document.querySelector(".pageup");

    function scrollByPromo() {
        if (window.pageYOffset > 1600) {
            btnUp.style.cssText = `
				opacity: 1;
				transition: 1s all;

			`;
        } else {
            btnUp.style.cssText = `
				opacity: 0;
				transition: 200ms all;
			`;
        }
    }

    window.addEventListener("scroll", scrollByPromo);

    btnUp.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.scrollIntoView({ behavior: "smooth" });
    });

    // BUTTON DOWN

    const btnDown = document.querySelector(".promo__down"),
        features = document.querySelector(".features");
    btnDown.addEventListener("click", (e) => {
        e.preventDefault();
        features.scrollIntoView({ behavior: "smooth" });
    });
});
