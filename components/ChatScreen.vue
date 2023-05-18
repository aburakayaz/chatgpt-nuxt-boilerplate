<template>
    <div class="flex flex-col h-screen">
      <div class="bg-gray-200 px-4 py-2 flex justify-between items-center">
        <h1 class="text-lg font-semibold text-gray-700">Chat Screen</h1>
      </div>
      <div class="flex-1 overflow-y-scroll">
        <div v-for="message in messages" :key="message.id" class="px-4 py-2 mb-2 bg-white rounded-lg shadow-sm">
          <p class="text-sm font-medium text-gray-600">{{ message.sender }}</p>
          <p class="text-sm font-light text-gray-800">{{ message.content }}</p>
        </div>
      </div>
      <div class="bg-gray-200 px-4 py-2 flex justify-between items-center">
        <input type="text" v-model="newMessage" class="w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal" placeholder="Type a message..." />
        <button @click="sendMessage" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newMessage: '',
        messages: [
          { id: 1, sender: 'John Doe', content: 'Hello there!' },
          { id: 2, sender: 'Jane Doe', content: 'Hi there!' }
        ]
      }
    },
    methods: {
      sendMessage() {
        const newId = Math.max(...this.messages.map(m => m.id)) + 1;
        this.messages.push({
          id: newId,
          sender: 'Me',
          content: this.newMessage
        });
        this.newMessage = '';
      }
    }
  }
  </script>
  
  <style lang="css" scoped>
  </style>

