<template>
  <v-container class="text-center font-weight-bold text-h6 outlined ">
    <v-card class="elevation-3 w-50 text-center mx-auto" style="font-family: yeonsung; background: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)">
      <v-card-title class="font-weight-black"/>갓생일지
      <v-row>
        <v-col cols="9" align="right">
          <v-form
            v-on:submit.prevent="submit()"
            >
            <v-text-field v-model="inputTodo" class="w-75 ml-3" color="white" :rules="charCount" clearable label="할 일을 입력해 주세요."></v-text-field>
          </v-form>
        </v-col >
        <v-col cols="3" class="mt-3" align="left">
            <v-icon class="add-icon-hover" type="sumbit" @click="submit()">mdi-plus</v-icon>
        </v-col>
      </v-row>

      <v-row v-for="(item,i) in todoList" :key="i">
        <v-col cols="2">▶️</v-col>
        <v-col>{{ item }}</v-col>
        <v-col>완료버튼</v-col>
        <v-col>삭제</v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'TodoLayout',
  props: {
  },

  data(){
    return{
      inputTodo : "",
      todoList : [],
      charCount: [v => !(v && v.length >= 50) || '50자 이상 입력할 수 없습니다.']
    }
  },
  mounted(){
    let getTodo = localStorage.getItem("todolist") || []
    this.todoList = JSON.parse(getTodo) 
  },
  methods: {
    submit(){
      if(this.inputTodo !== ""){
        this.todoList.push(this.inputTodo)
        localStorage.setItem("todolist", JSON.stringify(this.todoList))
        this.inputTodo = ''
      }
    }
  }
}
</script>
<style>
@font-face {
  font-family: yeonsung;
  src: url(../assets/fonts/BMYEONSUNG_ttf.ttf);
}
.add-icon-hover:hover{
  transition: all 1s;
  transform: rotate(90deg);
  color: white;
}
.v-input__details{
  text-align: center;
}
</style>
