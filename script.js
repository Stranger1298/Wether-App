const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ecea849ca4msh1409b3f957434b2p18297cjsnc6b18a5058bb',
		'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
	}
};

fetch('https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Washington%2CDC%2CUSA&contentType=csv&unitGroup=us&shortColumnNames=0', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));