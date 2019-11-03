<template>
  <div>
    <button @click="$emit('send-greeting', value1)">Send {{value1}}</button>
    <button @click="$emit('send-greeting', value2)">Send {{value2}}</button>
    <button @click="$emit('send-greeting', value3)">Send {{value3}}</button>
  </div>
</template>

<script>
  export default {
    name:"Child",
    data() {
      return {
        value1: "Hi",
        value2: "Salute",
        value3: "Bon jour",
      }
    },
  }
</script>



