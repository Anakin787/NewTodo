<template>
  <div class="completed-todos">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title class="text-h5">
              완료된 할일 목록
            </v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item v-for="(todo, index) in completedTodos" :key="index">
                  <v-list-item-content>
                    <v-list-item-title class="text-decoration-line-through">
                      {{ todo.text }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      완료일: {{ todo.completedAt }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item v-if="completedTodos.length === 0">
                  <v-list-item-content>
                    <v-list-item-title class="text-center text-grey">
                      완료된 할일이 없습니다.
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'CompletedTodos',
  data() {
    return {
      completedTodos: [
        { text: 'Vue.js 학습하기', completedAt: '2024-01-15' },
        { text: '프로젝트 계획 세우기', completedAt: '2024-01-14' },
        { text: '개발 환경 설정', completedAt: '2024-01-13' }
      ]
    };
  }
};
</script>

<style scoped>
.completed-todos {
  padding: 20px;
}
</style> 