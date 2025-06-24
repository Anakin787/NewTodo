<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" permanent>
      <!-- 드로어 내용 -->
      <v-list>
        <v-list-item no-action>
          <v-list-item-content>
            <v-list-item-title class="text-h6">주요</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">오늘할일</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>지우니의 Todo List</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <slot />
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
};
</script>

<style scoped>
</style> 