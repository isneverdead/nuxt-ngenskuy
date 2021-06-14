<template>
  <div class="canvas">
    <div class="container">
      <div class="card rounded-xl w-10/12 md:w-6/12 lg:w-1/4 p-1">
        <div class="w-full py-5 flex flex-col rounded-xl border-white border-4">
          <img
            src="~/assets/app_logo.svg"
            class="w-1/2 mx-auto mt-5 mb-10"
            alt="Ngenskuy Logo"
          />
          <h2 class="font-semibold font-sans text-2xl text-gray-600">
            Register
          </h2>
          <div class="flex flex-col text-left w-full font-sans mb-10">
            <!-- <label for="email" class="ml-3 font-bold font-sans text-gray-800"
              >Email</label
            > -->
            <input
              id="email"
              placeholder="email"
              class="mx-3 my-2 rounded-sm px-2 py-2"
              type="text"
            />
            <input
              id="username"
              placeholder="username"
              class="mx-3 my-2 rounded-sm px-2 py-2"
              type="text"
            />
            <!-- <label for="password" class="ml-3 font-bold font-sans text-gray-800"
              >Password</label
            > -->
            <input
              id="password"
              placeholder="password"
              class="mx-3 my-2 rounded-sm px-2 py-2"
              type="password"
            />
          </div>

          <!-- Sign Up button  -->
          <button
            class="
              button-shadow button-signup
              mx-auto
              px-5
              py-2
              mb-10
              rounded-md
              font-bold font-sans
            "
          >
            Sign Up
          </button>
          <!-- Sign Up button  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.canvas {
  @apply w-full h-screen;
  background: linear-gradient(
    110.22deg,
    #a6fff2 31.95%,
    rgba(242, 242, 242, 0) 100.69%
  );
}

.card {
  background: #b7f7fe;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}

.or {
  background: #b7f7fe;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.button-shadow {
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}

.button-login {
  background: #3bb4c1;
}

.button-signup {
  background: #e3e3e3;
}
</style>
