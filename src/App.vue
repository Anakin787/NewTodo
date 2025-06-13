<template>
  <v-app>
    <!-- class를 사용하려면 root element로 v-app사용이 필수 -->
    <div class="text-indigo" style="font-size: 2rem; height: 100px; background: linear-gradient(45deg, #f87b7f 0%, #fad0c4 99%, #fad0c4 100%);" align="center" >
      <div class="mt-5" style="font-family: yeonsung;">지우니의 Todo List</div>
      <div class="mr-5 mb-1" style="font-size:16px" align="right">{{ time }}</div>
    </div>
    <TodoLayout/>
  </v-app>
</template>
<script>
import TodoLayout from './components/TodoLayout.vue';

export default {
  name: "HomeView",
  components: {
    TodoLayout
  },

  data() {
    return {
      time: "",
      timerId: null
    }
  },

  mounted() {
    this.timerId = setInterval(() => {
      this.timeSlice()
    }, 1000);
  },

  beforeUnmount() {
    clearInterval(this.timerId);
  },

  methods: {
    timeSlice(){
      this.time = new Date().toString().slice(0,24)
      return this.time
    },
  }
}
</script>
<style>
@font-face {
  font-family: yeonsung;
  src: url(../src/assets/fonts/BMYEONSUNG_ttf.ttf);
}
</style>
