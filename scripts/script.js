console.log("Hello world");

const apiKey = new HackathonSiteApi(
	"api_key=hobAvyiOoCWbZGTq70P4ZQkEctJmZDXdH2zWNI7k"
);

async function getRandomPhoto(apiKey) {
	try {
		const apiUrl = `https://api.nasa.gov/planetary/apod/api_key=${apiKey}&count=1`;

		const response = await axios.get(apiUrl);

		const randomPhoto = {
			imageUrl: response.data[0].hdurl, //can also be just .Url <- there are two options for photo url
			title: response.data[0].title,
			date: response.data[0].date,
			explanation: response.data[0].explanation,
		};
		return randomPhoto;
	} catch {
		(error) => {
			console.error("Error getting random photo:", error);
		};
	}
}

const button = document.querySelector(".main__button");

// button.addEventListener('click', function()) {

// }
