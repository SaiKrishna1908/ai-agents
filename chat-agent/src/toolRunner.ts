import type OpenAI from "openai";
import { getWeatherByCityName } from "./tools/weather";
import { logMessage } from "./ui";

const getWeather = () => `It's hot, 90 degress`
const getWeatherByCity = async (location: string) => {
    return await getWeatherByCityName(location)
}

export const runTool = async (
    toolCall: OpenAI.Chat.Completions.ChatCompletionMessageToolCall,
    userMessage: string) => {
        const input = {
            userMessage,
            toolArgs: JSON.parse(toolCall.function.arguments || "{}"),
        };        
        console.log(`user message: ${userMessage}`)
        switch(toolCall.function.name) {
            case 'get_weather':
                return getWeather();
            case 'get_weather_by_city_name':
                const response = await getWeatherByCity(input.toolArgs['city'])
                return response
            default:
                throw new Error(`Unknown tool: ${toolCall.function.name}`)   
        }
}