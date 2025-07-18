import type { AIMessage } from '../types'
import { openai } from './ai'
import { zodFunction } from 'openai/helpers/zod'

export const runLLM = async ({ messages, tools }: { messages: AIMessage[], tools: any[] }) => {
  const formattedTools = tools.map(zodFunction)
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    temperature: 1.0,
    messages: messages,
    tools: formattedTools,
    tool_choice: 'auto',
    parallel_tool_calls: false
  })

  console.log(`response from llm: ${response}`)
  return response.choices[0].message
}
