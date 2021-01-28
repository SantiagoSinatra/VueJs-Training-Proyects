<template>
  <div>
    <my-input 
      name="Username"
      :rules = "{ required: true, min: 5 }"
    />
    <my-input 
      name="Password"
      :rules = "{ required: true, min: 8 }"
    />
    <my-button 
      color="white"
      background="darkslateblue"
      :disabled="!valid"
    /> <!-- : es el shorthand para v-bind lo usé para bindear una variable a una propiedad-->
  </div> <!-- Agregué este div para que el eslint no me hinche con que tiene que haber un solo componente... -->
</template>

<script>
import MyButton from './components/MyButton.vue'
import MyInput from './components/MyInput.vue'

export default {
  components: {
    MyButton,
    MyInput,
    MyInput
  },
  data() {
    return {
      valid: true /* Esta es la variable que bindee arriba */
    }
  }
}
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px 50px;
}
</style>
