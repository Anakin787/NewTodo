<template>
  <v-app>
    <!-- class를 사용하려면 root element로 v-app사용이 필수 -->
    <div class="mt-10" style="font-size: 2rem;" align="center">
      <span class="text-indigo-darken-2">Todo List </span>
      <v-icon style="font-weight:800; font-size:36px">check</v-icon>
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
      
    }
  },
}
</script>