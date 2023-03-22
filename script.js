const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '17ffc37763msh026892705701489p1e964fjsnbe2396229ae8',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Nagpur', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));