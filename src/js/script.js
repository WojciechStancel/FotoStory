const burgerBtn = document.querySelector(".navbar__btn");
const mobileNav = document.querySelector(".navbar__nav");
const mobileAnimation = document.querySelectorAll(".navbar__nav-link");
const navLink = document.querySelectorAll(".nav-link");
const nav = document.querySelector(".nav-link");
const footer = document.querySelector(".footer__year");

const handleAnimation = () => {
	mobileAnimation.forEach((link) => {
		link.classList.toggle("show-animation");
	});
};

const handleNavigation = () => {
	mobileNav.classList.toggle("show-menu");
	handleAnimation();

};

const handleYear = () => {
	const date = new Date().getFullYear();
	footer.textContent = date;
};

handleYear();

const removeMenu = () => {
	mobileNav.classList.remove("show-menu");
	mobileAnimation.forEach((item) => {
		item.classList.remove("show-animation");
	});
};

burgerBtn.addEventListener("click", handleNavigation);
navLink.forEach((item) => item.addEventListener("click", removeMenu));
