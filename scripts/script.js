const imageContainer = document.querySelector(".main__image");
const API_KEY = config.API_KEY;

async function getRandomPhoto() {
	const randomPhotoUrl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

	try {
		const { data } = await axios.get(randomPhotoUrl);
		data.forEach((photo) => {
			const imageUrl = photo.url;
			imageContainer.src = imageUrl;
			titleElement.innerText = photo.title;
			dateElement.innerText = photo.date;
			explanationElement.innerText = photo.explanation;
		});
	} catch (error) {
		console.error("Error grabbing jpeg:", error);
	}
}

getRandomPhoto();

const button = document.querySelector(".main__button");
const titleElement = document.querySelector(".main__title");
const dateElement = document.querySelector(".main__date");
const explanationElement = document.querySelector(".main__explanation");

button.addEventListener("click", function () {
	getRandomPhoto();
});

const todayDate = document.querySelector(".header__date");

const currentDate = {
	date: new Date().toDateString(),
};

todayDate.textContent = currentDate.date;
