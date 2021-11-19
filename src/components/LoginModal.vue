<template>
    <section @click="$emit('close-login')" class="z-20 h-screen w-screen bg-gray-200 fixed top-0 opacity-50">
    </section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 m-auto bg-white p-2 rounded-2xl shadow">
          <div class="p-2 shadow-2xl rounded-2xl">
            <h1 class="text-2xl text-center">Login</h1>
            <form class="p-2 my-2" @submit.prevent="submit">
              <div class="my-4">
                <label>Email or username</label>
                <input  v-bind:value="form.email" placeholder="Your email or username" class="rounder shadow p-2 w-full">
              </div>
              <div class="my-4">
                <label>Password</label>
                <input v-bind:value="form.password" placeholder="Your password" class="rounder shadow p-2 w-full" type="password">
              </div>
              <div class="my-4">
                <button type="submit" class="w-full border rounded-2xl shadow bg-gradient-to-r from-gray-300 to-gray-500">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      form :{
        email: "",
        password: "",
      }
    }
  },
  methods: {
    submit() {
      // this.form
    }
  }
}
</script>

<style scoped>
</style>
