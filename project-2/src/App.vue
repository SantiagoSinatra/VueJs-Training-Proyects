<template>
  <my-button 
    color="white"
    background="darkslateblue"
    :disabled="!valid"
  /> <!-- : es el shorthand para v-bind lo usé para bindear una variable a una propiedad-->
</template>

<script>
import MyButton from './components/MyButton.vue'
export default {
  components: {
    MyButton
  },
  data() {
    return {
      valid: false /* Esta es la variable que bindee arriba */
    }
  }
}
</script>

<style scoped>
</style>
