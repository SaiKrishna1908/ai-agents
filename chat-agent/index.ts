import 'dotenv/config'
import { runLLM } from './src/llm'
import { addMessages, getMessages } from './src/memory'
import { runAgent } from './src/agent'
import { z } from 'zod'

const userMessage = process.argv[2]

if (!userMessage) {
  console.error('Please provide a message')
  process.exit(1)
}

const weatherTool = {
  name: 'get_weather',
  description: `use this to get weather, location is optional`,
  parameters: z.object({
    reasoning: z.string().describe("why did you pick this tool?")
  })
}

const weatherByCityNameTool = {
  name: 'get_weather_by_city_name',
  description: `use this to get weather when a city name is available`,
  parameters: z.object({
    reasoning: z.string().describe("why did you pick this tool?"),
    city: z.string().describe("extract city name from the prompt")
  })
}

const response = await runAgent({userMessage, tools: [weatherTool, weatherByCityNameTool]})

console.log(response)