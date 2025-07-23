<template>
  <v-container fluid class="text-center font-weight-bold text-h6 outlined pa-0">
    <v-card id="card" class="elevation-3 text-center">
      <v-row>
        <v-col cols="11">
          <v-form ref="form" @submit.prevent='inputData' class="mt-5">
            <v-text-field v-model="inputTodo" class="ml-5 large-input" variant="outlined" :rules="inputRules" clearable
              label="할 일을 입력해 주세요."
              :style="{ '--input-font-size': '30px', '--input-height': '60px' }"
              >
              <template v-slot:input="{ props }">
                <input v-bind="props" style="font-size: 30px !important; height: 60px !important;" />
              </template>
            </v-text-field>
          </v-form>
        </v-col>
        <v-col cols="1" class="pl-0 mt-5">
          <v-btn class="add-icon-hover" variant="outlined" color="warning" style="height: 56px; width: 100px;">
            <v-icon type="sumbit" @click="submitIfValid()"> mdi-plus </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-divider class="mb-5" thickness="5" style="color: black;" />

      <!-- 새로고침시 내용이 남아있어야함 -->
      <v-row justify="center" style="width: 100%;" class="mx-auto">
        <v-col
          v-for="(todo, idx) in todoList"
          :key="idx"
          cols="12"
          class="d-flex"
        > 
          <v-card
            class="pa-3 flex-grow-1 d-flex align-center todo-card"
            variant="outlined"
            @click="onCardClick(idx)"
          >
            <div style="flex: 0 0 auto;">
              <v-checkbox v-model="todo.completed" color="primary" hide-details @click.stop></v-checkbox>
            </div>
            <span class="ml-3 text-left" style="flex: 1;" :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">{{ todo.text }}</span>
            <v-btn icon="mdi-delete" color="error" @click.stop="deleteTodo(idx)"></v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>

  <!-- 우측 상세 레이아웃 -->
  <v-navigation-drawer
    v-model="showDetails"
    fixed
    location="right"
    temporary
    width="300"
    attach="body"
  >
    <div class="pa-4">
      <h3 class="text-h6 font-weight-bold mb-4">할 일 상세</h3>
      <p v-if="selectedTodo">{{ selectedTodo.text }}</p>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'TodoLayout',
  data() {
    return {
      inputTodo: "",
      inputRules: [
        v => !(v && v.length >= 50) || '50자 이상 입력할 수 없습니다.'
      ],

      todoList: [],
      showDetails: false,
      selectedTodo: null
    }
  },
  mounted(){
    const savedTodos = sessionStorage.getItem("todolist");
    if (savedTodos) {
      this.todoList = JSON.parse(savedTodos);
    }
  },
  
  watch: {
    todoList: {
      handler(newTodoList) {
        sessionStorage.setItem("todolist", JSON.stringify(newTodoList));
      },
      deep: true
    }
  },
  
  methods: {
    inputData() {
      if (this.inputTodo.trim() === '') {
        // 공백인 경우 알림
        alert('입력값이 공백입니다. 올바른 값을 입력해 주세요.');
        return;
      }
      this.todoList.push({ text: this.inputTodo, completed: false })
      this.inputTodo = ''
    },

    submitIfValid() {
      if (this.$refs.form.validate()) {
        this.inputData();
      }
    },

    onCardClick(index) {
      this.selectedTodo = this.todoList[index];
      this.showDetails = true;
    },

    deleteTodo(index) {
      this.todoList.splice(index, 1);
    }
  }
}
</script>
<style>
@font-face {
  font-family: yeonsung;
  src: url(../assets/fonts/BMYEONSUNG_ttf.ttf);
}

/* Global style for large input using CSS variables */
.large-input .v-field__input {
  font-size: var(--input-font-size, 20px) !important;
  height: var(--input-height, 60px) !important;
  line-height: 1.2 !important;
}

.large-input .v-field {
  min-height: var(--input-height, 60px) !important;
}

.large-input input {
  font-size: var(--input-font-size, 20px) !important;
  height: var(--input-height, 60px) !important;
}

.add-icon-hover:hover .v-icon {
  transition: all 1s;
  transform: rotate(90deg);
  color: black;
}

.v-input__details {
  text-align: center;
}

#card {
  background: wheat;
  font-family: yeonsung;
  min-height: 100vh;
}

/* pointer cursor for card */
.todo-card {
  cursor: pointer;
}
</style>
