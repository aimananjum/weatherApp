const apiKey = "15c7eabd3cb3f9baa0c9fd476e3b50ed";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const cityname = document.getElementById("cityname");

const city = document.getElementById("city");
const humidity = document.getElementById("humidity");
const temp = document.getElementById("temp");
const windspeed = document.getElementById("wind");
const wimg =  document.getElementById("wimg");

async function checkWeather(){
    const response = await fetch(apiUrl+`&q=${cityname.value}`+`&appid=${apiKey}`);
    var data = await response.json();
    temp.innerHTML = data.main.temp + "°c";
    city.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity+"%";
    windspeed.innerHTML = data.wind.speed + "Km/h";
    console.log(data);
}

checkWeather();