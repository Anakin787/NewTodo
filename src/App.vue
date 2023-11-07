<template>
  <v-app>
    <!-- class를 사용하려면 root element로 v-app사용이 필수 -->
    <router-link to="/about" icon="mdi-circle"></router-link>
    <div class="mt-10" style="font-size: 2rem;" align="center">
      <span class="text-indigo-darken-2">Todo List</span>
      <v-icon icon="home" />
    </div>
  </v-app>
</template>