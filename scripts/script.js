console.log("Hello world");

// const apiKey = "hobAvyiOoCWbZGTq70P4ZQkEctJmZDXdH2zWNI7k";

// const apiKey = new HackathonSiteApi(
// 	"api_key=hobAvyiOoCWbZGTq70P4ZQkEctJmZDXdH2zWNI7k"
// );

// async function getRandomPhoto(apiKey) {
// 	try {
// 		const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=hobAvyiOoCWbZGTq70P4ZQkEctJmZDXdH2zWNI7ks&count=1`;

// 		const response = await axios.get(apiUrl);

// 		const randomPhoto = {
// 			imageUrl: response.data[0].hdurl, //can also be just .Url <- there are two options for photo url
// 			title: response.data[0].title,
// 			date: response.data[0].date,
// 			explanation: response.data[0].explanation,
// 		};
// 		return randomPhoto;
// 	} catch {
// 		(error) => {
// 			console.error("Error getting random photo:", error);
// 		};
// 	}
// }

// button.addEventListener('click', function()) {

// }

const imageContainer = document.querySelector(".main__image");

async function getRandomPhoto() {
	const randomPhoto =
		"https://api.nasa.gov/planetary/apod?api_key=hobAvyiOoCWbZGTq70P4ZQkEctJmZDXdH2zWNI7k&count=1";

	const { data } = await axios.get(randomPhoto);
	randomPhoto.src = data.url;
	console.log(data);
}

getRandomPhoto();

const button = document.querySelector(".main__button");
const titleElement = document.querySelector(".main__title");
const dateElement = document.querySelector("main__date");
const explanationElement = document.querySelector("main__explanation");
