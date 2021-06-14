<template>
  <div class="flex flex-col">
    <div class="w-full relative flex h-10 overflow-hidden rounded-md shadow-lg">
      <input
        class="w-full px-4 outline-none"
        placeholder="What do you feels?"
        type="text"
      />
      <div class="w-8 h-8 absolute right-5 top-1 cursor-pointer">
        <img src="~/assets/send_feed_icon.svg" alt="send-icon" />
      </div>
    </div>
    <div v-for="feed in getAllStatus" :key="feed.id">
      <UserFeed :status="feed" />
      <!-- {{ feed.statusId }} -->
    </div>
    <!-- <UserFeed />
    <UserFeed />
    <UserFeed />
    <UserFeed /> -->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      // isSidebarOpen: !true,
    }
  },
  computed: {
    ...mapGetters(['getAllStatus']),
  },
  methods: {
    ...mapMutations(['toggleSideba']),
    hhhh() {
      // eslint-disable-next-line no-console
      console.log('akbar')
      this.toggleSideba()
    },
  },
}
</script>

<style scoped></style>
