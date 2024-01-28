<template>
  <v-container class="text-center font-weight-bold text-h6">
    <v-card title="갓생 일지" class="elevation-3 w-50 text-center mx-auto" style="font-family: yeonsung">
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field v-model="inputTodo" label="할 일을 입력해 주세요." clearable class="w-75 ml-3" />
      </v-form>
      <v-btn class="ma-2">
        <v-icon icon="mdi-home" class="grey--text" />
      </v-btn>
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
    }
  }
}
</script>
<style>
@font-face {
  font-family: yeonsung;
  src: url(../assets/fonts/BMYEONSUNG_ttf.ttf);
}
</style>
