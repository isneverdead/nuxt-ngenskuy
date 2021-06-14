<template>
  <div class="canvas">
    <!-- body  -->
    <div class="message-card w-full flex flex-row h-full">
      <div
        class="
          flex flex-col
          w-1/3
          px-2
          pt-5
          rounded-l-xl rounded-bl-xl
          friend-list-section
        "
      >
        <!-- user friend list  -->
        <UserMessageFriend />
        <UserMessageFriend />
        <!-- user friend list  -->
      </div>
      <div class="flex flex-col w-2/3">
        <div class="w-full flex flex-row px-5 py-2 items-center bg-gray-400">
          <div
            class="
              w-16
              h-16
              mr-5
              overflow-hidden
              border-white border-4
              rounded-full
            "
          >
            <img src="~/assets/profile_picture.png" alt="profile-picture" />
          </div>
          <h2 class="font-sans font-semibold text-xl text-gray-800">Akbar</h2>
        </div>
        <!-- chat section  -->
        <div class="w-full overflow-y-scroll h-full flex flex-col p-5">
          <!-- left chat  -->
          <UserChat :is-sender="false" />

          <!-- right chat  -->
          <UserChat :is-sender="true" />
        </div>
        <!-- chat section  -->

        <!-- input chat section -->
        <div class="w-full flex flex-row px-5 py-2">
          <div
            class="w-full flex mr-5 h-10 overflow-hidden rounded-md shadow-lg"
          >
            <input
              class="w-full px-4 outline-none"
              placeholder="type something"
              type="text"
            />
          </div>
          <div class="w-10 h-10 cursor-pointer">
            <img src="~/assets/send_message_icon.svg" alt="send-icon" />
          </div>
        </div>
        <!-- input chat section -->
      </div>
    </div>
    <!-- body  -->
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
  @apply w-full flex flex-col text-center px-16 pt-5;

  height: 85vh;
  background-color: #f2f2f2;
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
