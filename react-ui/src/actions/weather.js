export const SET_WEATHER = 'SET_WEATHER';
export function setWeather(weather) {
  return {
    type : SET_WEATHER,
    weather
  }
}




export function getWeather() {
  
    return async function(dispatch) {


        try {

            //get key, TODO place in config (or likely just forget)
            let key = 'd0a10211ea3d36b0a6423a104782130e'

            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${key}`, {
                "method": "GET"
            })
            
            //LOG response
            let weatherResponse = await response.json()
            
            let weather = {
                //convert kelvin to celcius
                temperature : weatherResponse.main.temp - 273.15,
                //rainy, sunny or cloudy
                weatherIdCode : weatherResponse.weather[0].id
            }

            dispatch(setWeather(weather))

        }

        catch (e) {
            console.error(e)
        }

        
  }

}