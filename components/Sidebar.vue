<template>
  <div :class="['sidebar', isSidebarOpen ? 'sidebar-open' : '']">
    <div
      class="w-1/2 flex flex-col h-full bg-transparent"
      @click="toggleSideba"
    ></div>
    <div
      class="
        w-1/2
        flex flex-col
        h-full
        text-left
        px-10
        py-10
        sidebar-background
      "
    >
      <div class="w-full flex flex-row justify-end">
        <div class="w-8 h-8 cursor-pointer lg:hidden" @click="toggleSideba">
          <img src="~/assets/close_sidebar_icon.svg" alt="close-icon" />
        </div>
      </div>
      <NuxtLink to="/" class="font-sans font-semibold text-xl text-gray-800"
        >Home</NuxtLink
      >
      <div class="h-1 my-3 rounded-md bg-white"></div>
      <NuxtLink
        to="/notification"
        class="font-sans font-semibold text-xl text-gray-800"
      >
        Notification
      </NuxtLink>
      <div class="h-1 my-3 rounded-md bg-white"></div>
      <NuxtLink
        to="/message"
        class="font-sans font-semibold text-xl text-gray-800"
        >Messages</NuxtLink
      >
      <div class="h-1 my-3 rounded-md bg-white"></div>
      <NuxtLink
        to="/about"
        class="font-sans font-semibold text-xl text-gray-800"
        >About Us</NuxtLink
      >
      <div class="h-1 my-3 rounded-md bg-white"></div>
      <NuxtLink
        to="/login"
        class="font-sans font-semibold text-xl text-gray-800"
        >Log out</NuxtLink
      >
      <div class="h-1 my-3 rounded-md bg-white"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      // isSidebarOpen: !true,
    }
  },
  computed: {
    ...mapGetters(['isSidebarOpen']),
    getUser() {
      return this.$store.state.sidebarOpenStatus
    },
  },
  methods: {
    ...mapActions(['toggleSideba']),
    hhhh() {
      // eslint-disable-next-line no-console
      console.log('akbar')
      this.toggleSideba()
    },
  },
}
</script>

<style scoped>
.sidebar {
  @apply fixed z-10 w-full flex h-screen top-0 bg-transparent;

  transition: 1s;
  right: -1000px;
}

.sidebar-background {
  background: #b7f7fe;
}

.sidebar-open {
  @apply right-0;
}
</style>
