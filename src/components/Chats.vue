<template>
    <div class="chats">
        <li v-for="(chat, index) in chats" @click="selectChat(index)">
            <img :src="chat.photo" alt="">
            {{ chat.name }}
            <p>
                {{ chat.messages[chat.messages.length - 1] }}
            </p>
        </li>
    </div>
</template>

<script>
  export default {
    computed: {
      chats(){
        return this.$store.state.chats;
      },
    },
    methods: {
      selectChat(chatIndex){
        this.$store.commit('setCurrentChat', chatIndex);

      }
    }
  }
</script>

<style scoped>

    .chats {
        width: 190px;
    }

    .chats li {
        list-style: none;
        border-bottom: 1px solid #ccc;
        padding: 10px;
        font-size: 13px;
        min-height: 22px;
    }

    .chats img {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        margin-right: 5px;
        float: left;
        vertical-align: middle;

    }

    .chats p {
        color: #888;
        margin: 3px 0 0 30px;
    }
</style>
