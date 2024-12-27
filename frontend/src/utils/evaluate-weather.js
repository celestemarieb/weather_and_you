function evaluateWeather() {
    const storedUserData = localStorage.getItem('storedUserData')

    const userData = JSON.parse(storedUserData)
    
    let temperatureRange = userData.hourly.apparent_temperature
    
    let highestTemp = Math.max(temperatureRange)
    let lowestTemp = Math.min(temperatureRange)

    if (highestTemp < 34 && lowestTemp > 15){
        let userWeather = "good"
        return userWeather
    }
    else {
        let userWeather = "bad"
        return userWeather
    }
}

export default evaluateWeather;