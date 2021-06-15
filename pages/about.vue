<template>
  <div class="canvas">
    <!-- body  -->
    <div
      class="
        w-full
        px-10
        lg:px-28
        pt-5
        grid grid-flow-row grid-cols-1
        lg:grid-cols-2 lg:gap-10
        relative
        gap-5
      "
    >
      <img class="logo" src="~/assets/logo-ngenskuy.svg" alt="ngenskuy-logo" />
      <div class="flex flex-row">
        <div class="flex flex-col items-center mr-5">
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
          <h1 class="font-sans text-lg font-semibold text-gray-800">
            Front end Dev
          </h1>
        </div>
        <div class="flex flex-col text-left items-start">
          <h1 class="font-sans text-lg font-semibold text-gray-800">
            Fariz Akbar S
          </h1>
          <h1 class="font-sans text-gray-800">18.01.53.0058</h1>
          <a href="https://linkedin.com/in/fariz-akbar"
            >linkedin.com/in/fariz-akbar</a
          >
        </div>
      </div>
      <!-- profile 2 -->
      <div class="flex flex-row">
        <div class="flex flex-col items-center mr-5">
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
            <h1 class="text-4xl font-sans text-white font-bold uppercase">B</h1>
            <!-- <img :src="profileUrl" alt="profile-picture" /> -->
            <!-- <img src="~/assets/profile_picture.png" alt="profile-picture" /> -->
          </div>
          <h1 class="font-sans text-lg font-semibold text-gray-800">
            Back end Dev
          </h1>
        </div>
        <div class="flex flex-col text-left items-start">
          <h1 class="font-sans text-lg font-semibold text-gray-800">
            Bachtiar Yusuf
          </h1>
          <h1 class="font-sans text-gray-800">18.01.53.0054</h1>
          <!-- <a href="https://linkedin.com/in/fariz-akbar"
            >linkedin.com/in/fariz-akbar</a
          > -->
        </div>
      </div>
      <!-- profile 3 -->
      <div class="flex flex-row">
        <div class="flex flex-col items-center mr-5">
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
            <h1 class="text-4xl font-sans text-white font-bold uppercase">A</h1>
            <!-- <img :src="profileUrl" alt="profile-picture" /> -->
            <!-- <img src="~/assets/profile_picture.png" alt="profile-picture" /> -->
          </div>
          <h1 class="font-sans text-lg font-semibold text-gray-800">
            UI design
          </h1>
        </div>
        <div class="flex flex-col text-left items-start">
          <h1 class="font-sans text-lg font-semibold text-gray-800">
            Ahmad Nurhidayat
          </h1>
          <h1 class="font-sans text-gray-800">18.01.53.0059</h1>
          <!-- <a href="https://linkedin.com/in/fariz-akbar"
            >linkedin.com/in/fariz-akbar</a
          > -->
        </div>
      </div>
      <!-- profile 4 -->
      <div class="flex flex-row">
        <div class="flex flex-col items-center mr-5">
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
            <h1 class="text-4xl font-sans text-white font-bold uppercase">H</h1>
            <!-- <img :src="profileUrl" alt="profile-picture" /> -->
            <!-- <img src="~/assets/profile_picture.png" alt="profile-picture" /> -->
          </div>
          <h1 class="font-sans text-lg font-semibold text-gray-800">
            UX design
          </h1>
        </div>
        <div class="flex flex-col text-left items-start">
          <h1 class="font-sans text-lg font-semibold text-gray-800">
            Alfi Henan Atthaturk
          </h1>
          <h1 class="font-sans text-gray-800">18.01.53.0068</h1>
          <a href="https://www.instagram.com/neahn_/">instagram.com/neahn_</a>
        </div>
      </div>
    </div>
    <!-- body  -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      currentChat: 1,
      // isSidebarOpen: !true,
      listChat: [],
    }
  },
  computed: {
    ...mapGetters(['getAllChat']),
    ...mapGetters(['getAllFriend']),
    ...mapGetters(['getUserById']),

    initials() {
      const x = this.getUserById(this.currentChat).username

      return x.charAt(0)
    },
  },

  methods: {
    // ...mapMutations(['toggleCurrentChat']),
    toggleCurrentChat(id) {
      // eslint-disable-next-line no-console
      console.log(id)
      this.listChat = []
      this.currentChat = id
      this.listChat = this.getAllChat
    },
  },
}
</script>

<style scoped>
.canvas {
  @apply w-full flex flex-col text-center px-16 pt-5;

  height: 85vh;
  background-color: #f2f2f2;
}

.logo {
  @apply absolute top-0 left-0 right-0 mx-auto mt-20 w-8/12;

  /* z-index: -; */
}

.card {
  background: #b7f7fe;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}

.message-card {
  background: #b7f7fe;
}

.friend-list-section {
  background: #dedddd;
}

.button-shadow {
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}

.button-green {
  background: #3bb4c1;
}

.button-signup {
  background: #e3e3e3;
}

.backgrounda {
  background-image: url('~/assets/logo-ngenskuy.svg');
}
/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #b7f7fe;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 20px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
