<template>
  <div class="card px-5 py-3 flex flex-col border-white rounded-xl">
    <div class="flex flex-row w-full items-center">
      <div class="w-10 h-10 rounded-full bg-blue-300"></div>
      <div class="flex flex-col text-left ml-3">
        <h2 class="font-sans font-semibold text-xl text-gray-800">
          {{ name }}
        </h2>
        <h3 class="font-sans font-medium text-sm text-gray-600">Indonesia</h3>
      </div>
    </div>
    <div class="mt-5 w-full flex flex-col">
      <div
        v-for="a in userActivityList"
        :key="a"
        class="
          w-full
          py-2
          px-3
          flex flex-row
          rounded-lg
          items-center
          bg-white
          mb-3
        "
      >
        <div class="w-5 h-5 rounded-md bg-gray-400"></div>
        <h4 class="font-sans text-gray-800 text-base ml-3 font-semibold">
          {{ a }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'John Doe',
    },
    userActivityList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped></style>
