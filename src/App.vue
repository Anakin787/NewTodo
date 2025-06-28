<template>
  <AppLayout>
    <div class="mr-5 mb-1" style="font-size:16px" align="right">{{ time }}</div>
    <router-view />
  </AppLayout>
</template>

<script>
import AppLayout from './components/AppLayout.vue';

export default {
  name: "App",
  components: {
    AppLayout
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
