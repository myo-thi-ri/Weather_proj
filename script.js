/**
 * Weather App
 * DONE: Complete getWeatherData() to return json response Promise
 * DONE: Complete searchCity() to get user input and get data using getWeatherData()
 * DONE: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
  //CODE GOES HERE
  const fullUrl = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromises = fetch(fullUrl);

  return weatherPromises.then(response => {
    return response.json();
  });

}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  getWeatherData(city)
  .then(response=>{
    showWeatherData(response);
  }).catch(error=>{
    console.log('Error',error)
  })
}


/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (data) => {
  //CODE GOES HERE
  document.getElementById('city-name').innerHTML = data.name;
  document.getElementById('weather-type').innerHTML = data.weather[0].main;
  document.getElementById('temp').innerHTML = data.main.temp;
  document.getElementById('min-temp').innerHTML = data.main.temp_max;
  document.getElementById('max-temp').innerHTML = data.main.temp_min;
}

