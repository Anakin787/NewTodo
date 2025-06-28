<template>
  <v-app>
    <v-app-bar app elevation="4">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>지우니의 <span class="text-deep-purple font-weight-bold">Todo List</span></v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg" v-model="drawer" floating>
      <!-- 드로어 내용 -->
      <v-list>
        <v-list-item @click="navigateTo('/')" :class="{ 'v-list-item--active': $route.path === '/' }">
          <v-list-item-content>
            <v-list-item-title class="text-h6">오늘할일</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="navigateTo('/completed')" :class="{ 'v-list-item--active': $route.path === '/completed' }">
          <v-list-item-content>
            <v-list-item-title class="text-h6">완료된 할일</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="navigateTo('/major')" :class="{ 'v-list-item--active': $route.path === '/major' }">
          <v-list-item-content>
            <v-list-item-title class="text-h6">주요</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'AppLayout',
  data() {
    return {
      drawer: true,
    };
  },
  methods: {
    navigateTo(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.v-list-item--active {
  background-color: rgba(25, 118, 210, 0.1);
}
</style> 