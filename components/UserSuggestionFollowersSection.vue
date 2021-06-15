<template>
  <div class="flex flex-col">
    <!-- user sugestion followers  -->

    <div class="flex flex-col card rounded-xl ml-20 pb-5">
      <div class="flex flex-col">
        <div class="flex flex-row px-3 my-3 justify-evenly">
          <div
            class="
              w-24
              h-24
              mr-10
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
            <h1 class="text-4xl font-sans text-white font-bold uppercase">B</h1>
            <!-- <img :src="profileUrl" alt="profile-picture" /> -->
            <!-- <img src="~/assets/profile_picture.png" alt="profile-picture" /> -->
          </div>
          <div class="flex flex-col justify-center items-center text-center">
            <h2 class="font-sans font-semibold text-xl">Bachtiar</h2>
            <button
              v-if="followed"
              class="
                button-shadow button-green
                mx-auto
                px-7
                py-1
                rounded-2xl
                text-white
                font-bold font-sans
                cursor-pointer
              "
              @click="toggleFollow"
            >
              Followed
            </button>
            <button
              v-else
              class="
                button-shadow button-green
                mx-auto
                px-7
                py-1
                rounded-2xl
                text-white
                font-bold font-sans
                cursor-pointer
              "
              @click="toggleFollow"
            >
              Follow
            </button>
          </div>
        </div>
        <div class="mx-3 h-1 rounded-md bg-white"></div>
      </div>
    </div>

    <!-- user sugestion followers  -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      followed: false,
    }
  },
  methods: {
    toggleFollow() {
      this.followed = !this.followed
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
