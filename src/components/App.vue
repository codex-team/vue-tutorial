<template>
    <div class="chat">
        <header class="header"> {{ name }} </header>
        <chats></chats>
        <transition name="fade">
        <messages v-show="isOpened"></messages>
        </transition>
    </div>
</template>

<script>
    import Chats from './Chats.vue';
    import Messages from './Messages.vue';

    export default {
      computed: {
        name(){
          return this.$store.state.name;
        },
        currentChat(){
          return this.$store.state.currentChat;
        },
        isOpened(){
          return this.$store.state.currentChat !== null;
        }
      },
      components: {
        Chats,
        Messages
      },
      methods: {
      }
    }
</script>

<style scoped>
    .chat {
        width: 600px;
        margin: 100px auto;
        display: flex;
        background: #fff;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        flex-wrap: wrap;
    }

    .header {
        border-bottom: 1px solid #ccc;
        padding: 15px;
        flex-grow: 2;
        flex-basis: 100%;
        font-weight: 800;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }


</style>

