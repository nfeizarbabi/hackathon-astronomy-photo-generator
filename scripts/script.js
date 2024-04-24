const imageContainer = document.querySelector(".main__image");

async function getRandomPhoto() {
	const randomPhotoUrl =
		"https://api.nasa.gov/planetary/apod?api_key=hobAvyiOoCWbZGTq70P4ZQkEctJmZDXdH2zWNI7k&count=1";

	try {
		const { data } = await axios.get(randomPhotoUrl);
		const imageUrl = data[0].url;
		// randomPhoto.src = data.url;
		titleElement.textContent = data[0].title;
		dateElement.textContent = data[0].date;
		explanationElement.textContent = data[0].explanation;

		console.log(data);
		imageContainer.src = imageUrl;
	} catch (error) {
		console.error("Error grabbing jpeg:", error);
	}
}

getRandomPhoto();

const button = document.querySelector(".main__button");
const titleElement = document.querySelector(".main__title");
const dateElement = document.querySelector(".main__date");
const explanationElement = document.querySelector(".main__explanation");
