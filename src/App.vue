<template>
  <v-app>
    <!-- class를 사용하려면 root element로 v-app사용이 필수 -->
    <div class="text-indigo bg-grey-lighten-3" style="font-size: 2rem; height: 100px" align="center">
      <div class="mt-5" style="font-family: yeonsung;">지우니의 Todo List</div>
      <div class="mr-5 mb-1" style="font-size:16px" align="right">{{time}}</div>
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
      time: ""
    }
  },

  mounted() {
    this.time = setInterval(() => {
     this.timeSlice()
    }, 1000);
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