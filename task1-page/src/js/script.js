"use strict";

window.addEventListener("DOMContentLoaded", function () {
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

    console.log(width);

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
});
