<template>
  <nav class="w-full h-20 px-5 flex flex-row items-center justify-between">
    <img src="~/assets/app_logo.svg" class="w-30" alt="Ngenskuy-Logo" />
    <div class="w-8 h-8 cursor-pointer lg:hidden">
      <img
        src="~/assets/hamburger_menu_icon.svg"
        alt="hamburger-icon"
        @click="toggleSidebar"
      />
    </div>
    <div v-if="isUser" class="hidden lg:flex flex-row items-center">
      <NuxtLink
        to="/"
        :class="['navlink', currentPageIs == 'home' ? 'font-semibold' : '']"
        @click="setCurrentPage('home')"
      >
        Home
      </NuxtLink>
      <NuxtLink
        to="/notification"
        :class="[
          'navlink',
          currentPageIs == 'notification' ? 'font-semibold' : '',
        ]"
        @click="setCurrentPage('notification')"
      >
        Notification
      </NuxtLink>
      <NuxtLink
        to="/message"
        :class="['navlink', currentPageIs == 'message' ? 'font-semibold' : '']"
        @click="setCurrentPage('message')"
      >
        Messages
      </NuxtLink>
      <NuxtLink
        to="/about"
        :class="['navlink', currentPageIs == 'about' ? 'font-semibold' : '']"
        @click="setCurrentPage('about')"
      >
        About us
      </NuxtLink>
    </div>
    <div v-if="isUser" class="hidden lg:flex flex-row items-center">
      <div
        class="
          w-14
          h-14
          mx-3
          overflow-hidden
          rounded-full
          border-white border-4
        "
      >
        <img src="~/assets/profile_picture.png" alt="profile-picture" />
      </div>

      <button
        class="
          button-shadow button-green
          mx-auto
          px-7
          py-2
          rounded-md
          text-white
          font-bold font-sans
        "
      >
        Log out
      </button>
    </div>
    <div v-else class="hidden lg:flex flex-row">
      <button
        class="
          button-shadow button-green
          mr-5
          px-7
          py-2
          rounded-md
          text-white
          font-bold font-sans
        "
      >
        Log in
      </button>
      <button
        class="
          button-shadow button-signup
          mx-auto
          px-5
          py-2
          rounded-md
          font-bold font-sans
        "
      >
        Sign up
      </button>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  data() {
    return {
      // isSidebarOpen: !true,
      isUser: true,
    }
  },
  computed: {
    ...mapGetters(['isSidebarOpen']),
    ...mapGetters(['currentPageIs']),
    getUser() {
      return this.$store.state.sidebarOpenStatus
    },
  },
  methods: {
    ...mapActions(['toggleSideba']),
    ...mapMutations(['toggleSidebar', 'setCurrentPage']),
    // ...mapMutations([]),
    hhhh() {
      // eslint-disable-next-line no-console
      console.log('akbar')
      this.toggleSideba()
    },
  },
}
</script>

<style scoped>
.navlink {
  @apply font-sans cursor-pointer text-xl mr-16 hover:text-gray-700;
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
</style>
