function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("API Response Data");
		}, 1000);
	});
}

export default getResponseFromAPI;
