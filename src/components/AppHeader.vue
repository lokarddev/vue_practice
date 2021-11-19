<template>
  <div class="items-center">
    <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2 shadow">
      <router-link v-for="item in list" :key="item" class="mx-2" v-bind:to="item.to">{{ item.title }}</router-link>
      <button class="mx-2 border m-auto p-2">Login</button>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      list: [
        {to: "/", title: "Home"},
        {to: "/dc-heroes", title: "Dc Heroes"},
        {to: "/calendar", title: "Calendar"},
        {to: "/markdown", title: "Markdown"},
        {to: "/slider", title: "Slider"},
      ]
    }
  },
}
</script>
