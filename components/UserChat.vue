<template>
  <div :class="['chat-card', isSender ? 'sender' : '']">
    <p class="font-semibold font-sans text-gray-800 text-md">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga amet
      eligendi tenetur minus, voluptatibus sapiente.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    isSender: Boolean,
  },
}
</script>

<style scoped>
.chat-card {
  @apply max-w-md my-2 text-left  rounded-md px-5 py-2 bg-gray-300;
}

.sender {
  @apply self-end bg-green-300;
}
</style>
