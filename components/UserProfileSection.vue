<template>
  <div>
    <!-- user profile section  -->
    <div class="card rounded-xl mr-20 p-1 hidden lg:flex">
      <div class="w-full py-5 flex flex-col rounded-xl border-white border-4">
        <!-- profile picture  -->
        <div
          class="
            w-32
            h-32
            mx-auto
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
        <!-- profile picture  -->
        <!-- user information -->
        <div class="w-full flex flex-col">
          <!-- user name  -->
          <h1 class="font-semibold text-xl text-gray-800">
            {{ getUserById(1).username }}
          </h1>
          <!-- user bio  -->
          <h3 class="font-normal text-gray-600">
            {{ getUserById(1).userBio }}
          </h3>
          <!-- edit button  -->
          <button
            class="
              px-5
              mx-auto
              button-green
              rounded-full
              button-shadow
              font-semibold
              text-lg text-white
              font-sans
            "
          >
            Edit
          </button>
          <!-- user post, followers, following  -->
          <div class="w-full my-4 grid grid-flow-row grid-cols-3 gap-4 px-3">
            <div class="rounded-md bg-white">
              <h3 class="font-semibold text-gray-800">4</h3>
              <p class="text-gray-600">Post</p>
            </div>
            <div class="rounded-md bg-white">
              <h3 class="font-semibold text-gray-800">
                {{ getUserById(1).userFollowing.length }}
              </h3>
              <p class="text-gray-600">Following</p>
            </div>
            <div class="rounded-md bg-white">
              <h3 class="font-semibold text-gray-800">
                {{ getUserById(1).userFollowers.length }}
              </h3>
              <p class="text-gray-600">Followers</p>
            </div>
          </div>
          <!-- user galery  -->
          <div
            class="
              rounded-md
              bg-white
              my-4
              grid grid-flow-row grid-cols-2
              gap-2
              p-2
              mx-3
            "
          >
            <div class="rounded-md h-16 overflow-hidden bg-white">
              <img src="~/assets/profile_picture.png" alt="profile-picture" />
            </div>
            <div class="rounded-md h-16 overflow-hidden bg-white">
              <img src="~/assets/profile_picture.png" alt="profile-picture" />
            </div>
            <div class="rounded-md h-16 overflow-hidden bg-white">
              <img src="~/assets/profile_picture.png" alt="profile-picture" />
            </div>
            <div class="rounded-md h-16 overflow-hidden bg-white">
              <img src="~/assets/profile_picture.png" alt="profile-picture" />
            </div>
          </div>
        </div>
        <!-- user information -->
      </div>
    </div>
    <!-- user profile section  -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      followed: false,
    }
  },
  computed: {
    ...mapGetters(['getUserById']),
    profileUrl() {
      return this.getUserById(this.status.statusId).profileUrl
    },
    initials() {
      const x = this.getUserById(this.status.statusId).username

      return x.charAt(0)
    },
  },

  methods: {},
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
