const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ecea849ca4msh1409b3f957434b2p18297cjsnc6b18a5058bb',
		'X-RapidAPI-Host': 'weather-api-by-any-city.p.rapidapi.com'
	}
};

fetch('https://weather-api-by-any-city.p.rapidapi.com/weather/Patna', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));