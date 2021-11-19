<template>
  <div class="m-auto">
    <h1 class="text-3xl my-2 text-center">Vue calendar</h1>
    <section class="my-2 flex justify-between">
      <h2 class="font-bold">{{ currentMonthName }}</h2>
      <h2 class="font-bold mx-2">{{ currentYear }}</h2>
    </section>
    <section class="flex my-3">
      <p class="w-10 h-10 text-center" style="width: 14.28%" v-for="day in days" :key="day">{{ day }}</p>
    </section>
    <section class="flex flex-wrap">
      <p class="text-center" style="width: 14.28%" v-for="num in startDay()" :key="num"></p>
      <p class="w-1/7 h-10 text-center" style="width: 14.28%" v-for="num in daysInMonth()" :key="num" :class="currenDateClass(num)">{{ num }}</p>
    </section>
    <section class="flex justify-between m-4">
      <button class="px-2 border rounded" @click="prevMonth()">Prev</button>
      <button class="px-2 border rounded" @click="nextMonth()">Next</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return{
      currentDate: new Date().getUTCDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ['Sun', 'Mon', 'Tue', 'Wed', "Thu", "Fri", "Sat"]
    }
  },
  methods: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    nextMonth() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    prevMonth() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    currenDateClass(num) {
      const calenderFullDate = new Date(
          this.currentYear,
          this.currentMonth,
          num
      ).toDateString();
      const currentFullDate = new Date().toDateString();
      return calenderFullDate === currentFullDate ? "text-red-600" : "";
    },
  },
  computed: {
    currentMonthName() {
      return new Date(
          this.currentYear,
          this.currentMonth
      ).toLocaleString("default", { month: "long" });
    },
  },
}
</script>
