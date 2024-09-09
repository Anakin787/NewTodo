<template>
  <v-container class="text-center font-weight-bold text-h6 outlined">
    <v-card id="card" class="elevation-3 text-center mx-auto" >
      <div class="font-weight-black mt-2 mb-1" style="font-size: 24px;">갓생일지</div>
      <v-row>
        <v-col cols="9" align="right">
          <v-form 
            ref="form"
            @submit.prevent='inputData'
            >
            <v-text-field v-model="inputTodo" class="w-75 ml-3" variant="outlined" :rules="inputRules" clearable label="할 일을 입력해 주세요."></v-text-field>
          </v-form>
        </v-col >
        <v-col cols="3" class="mt-3" align="left">
            <v-icon class="add-icon-hover" type="sumbit" @click="submitIfValid()">mdi-plus</v-icon>
        </v-col>
      </v-row>
      <v-divider class="mb-5" thickness="2" style="color: black; opacity: inherit"/>
      <!-- 새로고침시 내용이 남아있어야함 -->
      <v-row v-for="(list,idx) in todoList" :key="idx">
        <v-col cols="2">▶</v-col>
        <!-- 글씨를 눌렀을때 완료표시가 되어야함 -->
        <v-col align="left"> {{ list }}</v-col>
        <!-- icon클릭시 해당 인덱스의 값이 삭제되어야 함 -->
        <v-col cols="2"><v-icon> mdi-delete-outline </v-icon></v-col>
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
      inputRules: [
        v => !!v || '공백은 입력할 수 없습니다.',
        v => v.trim().length > 0 || '공백 입력은 허용되지 않습니다.',
        v => !(v && v.length >= 50) || '50자 이상 입력할 수 없습니다.'
      ],

      todoList:[]
    }
  },
  methods: {
    inputData(){
      if (this.inputTodo.trim() === '') {
        // 공백인 경우 알림
        alert('입력값이 공백입니다. 올바른 값을 입력해 주세요.');
        return;
      }
      this.todoList.push(this.inputTodo)
      this.inputTodo = ''
      // console.log("inputData",this.todoList[0])
    },

    submitIfValid() {
      if (this.$refs.form.validate()) {
        this.inputData();
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

#card{
  background: wheat;
  font-family: yeonsung;
  width: 75%;
  height: 1000px;
}
</style>
