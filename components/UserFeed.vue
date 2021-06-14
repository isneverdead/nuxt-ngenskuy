<template>
  <div class="w-full card rounded-xl p-1 my-5">
    <div
      class="w-full px-5 py-2 flex flex-row rounded-xl border-white border-4"
    >
      <div class="flex flex-col text-left items-start w-1/3">
        <div
          class="w-24 h-24 overflow-hidden border-white border-4 rounded-full"
        >
          <!-- <img :src="profileUrl" alt="profile-picture" /> -->
          <img src="~/assets/profile_picture.png" alt="profile-picture" />
        </div>
        <h2 class="font-sans font-semibold text-lg text-gray-800">
          {{ getUserById(status.statusId).username }}
          <!-- {{ profileUrl }} -->
        </h2>
        <p class="font-sans font-normal text-xm text-gray-600">Semarang</p>
      </div>
      <div class="flex flex-col w-2/3">
        <div
          class="
            rounded-md
            w-full
            bg-white
            flex
            items-center
            justify-center
            py-3
            px-5
            mb-5
            h-3/4
          "
        >
          <h1 class="font-sans font-bold">" {{ status.content }} "</h1>
        </div>
        <div class="h-1/4 flex flex-row justify-between pl-2">
          <img
            class="w-8 h-8 cursor-pointer"
            src="~/assets/share_icon.svg"
            alt="share-icon"
          />
          <img
            v-if="like"
            class="w-8 h-8 cursor-pointer"
            src="~/assets/like_icon_true.svg"
            alt="like-icon"
            @click="toggleLike"
          />
          <img
            v-else
            class="w-8 h-8 cursor-pointer"
            src="~/assets/like_icon_false.svg"
            alt="like-icon"
            @click="toggleLike"
          />
          <img
            v-if="save"
            class="w-8 h-8 cursor-pointer"
            src="~/assets/save_icon_true.svg"
            alt="save-icon"
            @click="toggleSave"
          />
          <img
            v-else
            class="w-8 h-8 cursor-pointer"
            src="~/assets/save_icon_false.svg"
            alt="save-icon"
            @click="toggleSave"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    status: {
      type: Object,
      default: () => {},
    },
    // userActivityList: {
    //   type: Array,
    //   default: () => [],
    // },
  },
  data() {
    return {
      like: false,
      save: false,
      // profileUrl: '',
    }
  },
  computed: {
    ...mapGetters(['getUserById']),
    profileUrl() {
      return this.getUserById(this.status.statusId).profileUrl
    },
  },

  methods: {
    toggleLike() {
      this.like = !this.like
    },
    toggleSave() {
      this.save = !this.save
    },
    // profileUrl() {
    //   this.profileUrl = this.getUserById(this.status.statusId).profileUrl
    // },
    hhhh() {
      // eslint-disable-next-line no-console
      console.log('akbar')
      this.toggleSideba()
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
