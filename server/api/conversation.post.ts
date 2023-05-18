import { ChatGPTAPI, ChatMessage } from 'chatgpt'

const runtimeConfig = useRuntimeConfig()

const api = new ChatGPTAPI({
    apiKey: runtimeConfig.openAiKey
})

let parentMessageId: string

async function converse(message: string, clearContext: boolean): Promise<string> {
    const res = clearContext ? await api.sendMessage(message) : await api.sendMessage(message, { parentMessageId })
    parentMessageId = res.id
    return res.text
}

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const response = await converse(body.message, body.clearContext || false)
    return { response }
})