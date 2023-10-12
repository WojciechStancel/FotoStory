const counterItems = document.querySelectorAll(".counter-area");
const counterBox = document.querySelector(".counter__box");

const options = {
	rootMargin: "100px",
};

const startCounter = (entry) => {
	if (entry[0].isIntersecting) {
		counterItems.forEach((counter) => {
			const updateCounter = () => {
				const finalNumber = counter.getAttribute("data-number");
				const value = parseInt(counter.textContent);

				const speed = finalNumber / 100;

				if (value < finalNumber) {
					counter.textContent = `${Math.floor(value + speed)}`;
					setTimeout(updateCounter, 10);
				} else {
					counter.textContent = finalNumber;
				}
			};

			updateCounter();
		});
	}
};

const observer = new IntersectionObserver(startCounter, options);
observer.observe(counterBox);
