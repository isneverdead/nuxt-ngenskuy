<template>
  <div
    class="
      w-full
      flex flex-row
      rounded-lg
      my-2
      px-5
      py-2
      items-center
      bg-gray-400
      cursor-pointer
    "
  >
    <div
      class="
        w-24
        h-24
        overflow-hidden
        flex flex-row
        items-center
        justify-center
        text-center
        border-white border-4
        rounded-full
        bg-red-400
      "
    >
      <h1 class="text-4xl font-sans text-white font-bold uppercase">
        {{ initials }}
      </h1>
      <!-- <img :src="profileUrl" alt="profile-picture" /> -->
      <!-- <img src="~/assets/profile_picture.png" alt="profile-picture" /> -->
    </div>
    <h2 class="font-sans ml-5 font-semibold text-xl text-gray-800">
      {{ getUserById(friendId).username }}
    </h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    friendId: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ...mapGetters(['getUserById']),
    profileUrl() {
      return this.getUserById(this.friendId).profileUrl
    },
    initials() {
      const x = this.getUserById(this.friendId).username

      return x.charAt(0)
    },
  },
}
</script>

<style scoped></style>
