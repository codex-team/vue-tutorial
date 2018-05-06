<template>
    <div class="dialog">
        <h1>
            {{ chat.name }}
        </h1>
        <li class="message" v-for="msg in chat.messages">{{ msg }}</li>

        <textarea v-on:keydown.enter="newMessage"></textarea>
    </div>
</template>

<script>
export default {
  computed: {
    chat(){
      let chats = this.$store.state.chats,
        currentChat = this.$store.state.currentChat;

      return chats[currentChat];
    }
  },
  methods: {
    newMessage(event) {
      this.$store.dispatch('sendMessage', event.target.value);
    }}
}
</script>

<style>
    .dialog {
        padding: 20px 40px;

    }

    .message {
        margin: 5px 0;
        border-radius: 20px;
        display: block;
        padding: 10px 0;
        font-size: 14px;
    }
</style>
