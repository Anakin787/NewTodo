<template>
  <v-app>
    <!-- class를 사용하려면 root element로 v-app사용이 필수 -->
    <div class="text-indigo bg-grey-lighten-3" style="font-size: 2rem; height: 15%" align="center">
      <div class="mt-7">Todo List<v-icon style="font-weight:700; font-size:36px">check</v-icon></div>
      <div class="mr-5" style="font-size:16px" align="right">{{timeSlice()}}</div>
    </div>
    <TodoLayout/>
  </v-app>
</template>
<script>
import TodoLayout from './components/TodoLayout.vue';

export default {
  components: {
    TodoLayout
  },

  data() {
    return {
      time: ""
    }
  },

  mounted() {
    setInterval(() => {
     this.timeSlice()
    }, 1000);
  },
  
  methods: {
    timeSlice(){
      this.time = new Date()
      return this.time.toString().slice(0,24)
    },
  }
}
</script>