const menu = document.querySelector(".menuBtn");
const filter = document.querySelector(".header__filter");
const block = document.querySelector(".header__block");
const close = document.querySelector(".burger__close");
let lastScrollY = window.scrollY;
const nav = document.querySelector(".header__nav");

window.addEventListener("scroll", () => {
	if (window.scrollY > lastScrollY) {
		nav.style.transform = "translateY(-100%)";
	} else {
		nav.style.transform = "translateY(0)";
	}
	lastScrollY = window.scrollY;
});

const blurBackground = document.querySelector(".transparantly");
for (let i = 1; i <= 5; i++) {
	const currentItem = document.querySelector(`#item_${i}`);
	currentItem.addEventListener("mouseover", () => {
		blurBackground.classList.add("blur");
	});
	currentItem.addEventListener("mouseout", () => {
		blurBackground.classList.remove("blur");
	});
}

close.addEventListener("click", () => {
	block.classList.toggle("none");
	filter.classList.toggle("none");
});

menu.addEventListener("click", () => {
	block.classList.toggle("none");
	filter.classList.toggle("none");
});
filter.addEventListener("click", () => {
	block.classList.toggle("none");
	filter.classList.toggle("none");
});
