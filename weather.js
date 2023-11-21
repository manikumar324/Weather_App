const inputElement=document.getElementById("inputBtn")
const searchBtn=document.getElementById("searchBtn")
const weatherImg=document.querySelector(".weather-img")
const temperature=document.getElementById("temp")
const description=document.getElementById("desc")
const humidity=document.getElementById("humidity")
const windSpeed=document.getElementById("wind-speed")

const locationNotFound=document.querySelector(".location-not-found")
const weatherBody=document.querySelector(".weather-body")

async function checkWeather(city){
    const apiKey="7cb1c44c0a6d8b41b10b865fe96c02a8"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const weatherData= await fetch(`${url}`)
        .then(response=>
        response.json());

        if(weatherData.cod === `404`){
            locationNotFound.style.display="flex";
            weatherBody.style.display="none";
        }

    console.log(weatherData)
    // locationNotFound.style.display="none"
    // weatherBody.style.display="flex"
    temperature.textContent=`${Math.round(weatherData.main.temp-273.15)}°C`;
    description.textContent=`${weatherData.weather[0].description}`
    humidity.textContent=`${weatherData.main.humidity}%`
    windSpeed.textContent=`${weatherData.wind.speed}km/H`

    switch(weatherData.weather[0].main){
        case 'Clear':
            weatherImg.src="sun.png"
            break;
        case 'Rain':
            weatherImg.src="rain.png"
            break;
        case 'Smoke':
            weatherImg.src="haze.jpeg"
            break;
        case 'Clouds':
            weatherImg.src="clouds.png"
            break;
        case 'Haze':
            weatherImg.src="clouds.png"
            break;
        
    }
}   

searchBtn.addEventListener('click',()=>{
    checkWeather(inputElement.value)
})





