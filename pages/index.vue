<template>
  <div>
    <!-- body  -->
    <div
      class="w-full px-16 pt-5 grid grid-flow-row grid-cols-1 lg:grid-cols-3"
    >
      <!-- user profile section  -->

      <UserProfileSection />
      <!-- user profile section  -->
      <!-- user status section  -->
      <UserFeedSection />
      <!-- user status section  -->
      <!-- user sugestion followers  -->
      <UserSuggestionFollowersSection class="hidden lg:flex" />
      <!-- user sugestion followers  -->
    </div>
    <!-- body  -->

    <div class="flex flex-row">
      <NuxtLink class="mx-2" to="/">Home page</NuxtLink>
      <NuxtLink class="mx-2" to="/login">Login page</NuxtLink>
      <NuxtLink class="mx-2" to="/signup">Sign up page</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isUser: true,
    }
  },
}
</script>

<style scoped>
.canvas {
  @apply w-full flex flex-col text-center;

  background-color: #f2f2f2;
}

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

.button-signup {
  background: #e3e3e3;
}
</style>
