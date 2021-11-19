<template>
  <div class="flex flex-wrap w-full relative">
    <div class="absolute w-full" v-for="(color, index) in sliders" :key="color">
      <transition name="fade">
        <div v-if="currentSlide === index" :class="color" style="height: 350px"></div>
      </transition>
    </div>
    <div class="w-full" style="height: 340px">
      <div class="absolute bottom-0 flex justify-center w-full">
        <div v-for="(item, index) in sliders" :key="item" :class="currentSlide === index ?'bg-green-500':'bg-black'" class="shadow mx-2 w-4 h-4 rounded-full cursor-pointer" @click="makeActive(index)"></div>
      </div>
    </div>
  </div>
  <div class="absolute my-10 flex w-full">
    <div class="m-auto">
      <transition name="fade">
        <h1 v-if="show">Slider</h1>
      </transition>
      <button v-on:click="show = !show" class="px-2 rounded border">Toggle text</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 1,
      interval: "",
      sliders: ['bg-blue-600', 'bg-yellow-400', "bg-red-400"],
      show: false,
    };
},
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0:this.currentSlide+1
    }, 2000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    makeActive(index) {
      this.currentSlide = index
    }
  }
}
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: all 1s ease;
  }

  .fade-enter-from{
    opacity: 0;
    transform: translateX(-100%);
  }
  .fade-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }
</style>
