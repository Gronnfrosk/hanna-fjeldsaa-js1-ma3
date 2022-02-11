const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=";
const enableUrl = "4d1ee25cd1d44fcea63a59b0bfd1a70f";
const key = url + enableUrl;

const resultsContainer = document.querySelector(".results");

async function getFacts() {
	try {
		const response = await fetch(key);

		const results = await response.json();

		const information = results.results;
	} catch (error) {
		console.log(error);
		resultsContainer.innerHTML = alert("Error!!! Something went wrong!", error);
	}

	const response = await fetch(key);

	const results = await response.json();

	const information = results.results;

	resultsContainer.innerHTML = "";

	for (let i = 0; i < information.length; i++) {
		if (i === 8) {
			break;
		}

		resultsContainer.innerHTML += `<div>Name: ${information[i].name}, Rating: ${information[i].rating}, Number of tags: ${information[i].tags.length}</div>`;
	}
}
getFacts();
