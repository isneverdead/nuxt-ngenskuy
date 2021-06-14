<template>
  <div>
    <div class="flex px-5 flex-row">
      <div
        class="
          w-24
          h-24
          mr-10
          overflow-hidden
          border-white border-4
          rounded-full
        "
      >
        <img src="~/assets/profile_picture.png" alt="profile-picture" />
      </div>
      <div class="flex flex-col text-left justify-center">
        <h2 class="font-sans font-semibold text-lg text-gray-800">Akbar</h2>
        <p class="font-sans font-normal text-xm text-gray-600">
          Telah membuat status
        </p>
      </div>
    </div>

    <div class="h-1 my-3 rounded-md bg-white"></div>
  </div>
</template>

<script>
export default {}
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
