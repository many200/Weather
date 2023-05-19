
    const apiKey = "c1186d3b51f77bd9dc162fe19c900974"
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q= "
    const search = document.querySelector(".search input")
    const searchBtn = document.querySelector(".search button")
    const weatherIcon = document.querySelector(".weather-icon")
    const weather = document.querySelector(".weather")
    const error = document.querySelector(".error")
    async function checkWeather(city){
        const responce = await fetch(apiUrl + city +`&appid=${apiKey}`)
        if (responce.status == 404) {
            error.style.display = "block"
            weather.style.display = "none"
            console.log(city);
        }
        
        
        else{

            var data = await responce.json()
        
            document.querySelector(".city").innerHTML = data.name
            document.querySelector(".temp").innerHTML = Math.trunc(data.main.temp - 273.15 )+ "°C"
            document.querySelector(".humidity").innerHTML =Math.trunc(data.main.humidity) + "%"
            document.querySelector(".wind").innerHTML =Math.trunc(data.wind.speed) + "km/h"
    
            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "images/clouds.png"
            }else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "images/clear.png"
            }else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "images/rain.png"
            }else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "images/drizzle.png"
            }else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "images/mist.png"
            }else if(data.weather[0].main == "Snow"){
                weatherIcon.src = "images/snow.png"
            }






            
            error.style.display = "none"
            weather.style.display = "block"
        }
       
        
    }
    searchBtn.addEventListener("click", (e) =>{
        
        checkWeather(search.value);
        weather.style.display = "block"
       
    })
    search.addEventListener("keyup", e =>{
        console.log(e.target.value);
        if ( e.key == "Enter" ) {
            checkWeather(search.value)
            weather.style.display = "block"
              
        }if(e.target.value == ""){
            error.style.display = "none"
            weather.style.display = "none"
        }
        
    })
   

