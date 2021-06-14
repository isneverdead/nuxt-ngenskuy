<template>
  <div>
    <div class="flex px-5 flex-row">
      <div
        class="
          w-24
          h-24
          mr-3
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
          {{ initial }}
        </h1>
        <!-- <img :src="profileUrl" alt="profile-picture" /> -->
        <!-- <img src="~/assets/profile_picture.png" alt="profile-picture" /> -->
      </div>
      <div class="flex flex-col text-left justify-center">
        <h2 class="font-sans font-semibold text-lg text-gray-800">
          {{ name }}
        </h2>
        <p class="font-sans font-normal text-xm text-gray-600">
          Telah membuat status
        </p>
      </div>
    </div>

    <div class="h-1 my-3 rounded-md bg-white"></div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    initial: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.card {
  background: #b7f7fe;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}

.button-shadow {
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}

.button-green {
  background: #3bb4c1;
}
</style>
