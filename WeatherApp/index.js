const searchBtn = document.getElementById("search-btn")
const city = document.getElementById("text-box")
const cityDes = document.getElementById("city-field")
const tempDes = document.getElementById("temp-field")
const Des = document.getElementById("des-field")
const humDes = document.getElementById("hum-field")
const feelsDes = document.getElementById("feels-field")
const windDes = document.getElementById("wind-field")

// .catch(err => alert("City Not Found"))

searchBtn.addEventListener("click",function(){
    
    citySearch()
    clearField()

})

function citySearch(){
fetch('http://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=cb2e560ae699e1d52367949f70dcc2ad&units=metric')
.then(response => response.json())
.then(data => {
    const cityName = data['name']
    const temp = data['main']['temp']
    const desVal = data['weather'][0]['description']
    const humVal = data['main']['humidity']
    const feelsVal = data['main']['feels_like']
    const windVal = data['wind']['speed']


    cityDes.textContent = "Weather in " + cityName
    tempDes.textContent = "Temp: "+temp + "℃"
    Des.textContent = "Description: "+ desVal
    humDes.textContent = "Humidity: " +humVal+"%"
    feelsDes.textContent = "Feels Like: "+ feelsVal + "℃"
    windDes.textContent = "Wind Speed: "+ windVal + "km/h"
    

})

}

function clearField()
{
    document.getElementById("text-box").value = "";
}
