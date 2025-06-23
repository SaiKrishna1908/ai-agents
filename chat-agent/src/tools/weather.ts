import axios from "axios";

export const getWeatherByCityName = async (location: string) => {    
    const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
    const WEATHER_API_URL = process.env.WEATHER_API_URL;
    if (WEATHER_API_KEY) {
        try {
            const apiCallUrl = `${WEATHER_API_URL}?q=${location}&key=${WEATHER_API_KEY}`;
            const res = await axios.get(apiCallUrl)            
            return res.data.current.temp_c.toString();
        } catch (error) {
            console.error('Error fetching data: ', error)
        }     
    }
}