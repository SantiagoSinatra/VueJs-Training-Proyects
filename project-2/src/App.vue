<template>
  <div>
    <form @submit.prevent="submit" class="form"> <!-- @submit tiene un modificador que previene el comportamiento por defecto de en este caso el formulario. Es un shorthand para $evt.preventDefault() -->
      <my-input 
        name="Username"
        :rules = "{ required: true, min: 5 }"
        :value = "username.value"
        type = "text"
        @update="update"
      />

      <my-input 
        name="Password"
        :rules = "{ required: true, min: 8 }"
        :value = "password.value"
        type = "password"
        @update="update"
      />

      <my-button 
        color="white"
        background="darkslateblue"
        :disabled="!valid"
      /> <!-- : es el shorthand para v-bind lo usé para bindear una variable a una propiedad-->
    </form>
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
      username: {
        value: '',
        valid: false
      },
      password: {
        value: '',
        valid: false
      }
    }
  },

  computed: { /* Funciones que no tienen argumentos y que son tratadas como variables behind the scenes */
    valid() {
      return this.username.valid && this.password.valid; /* Se fija que ambos valores sean true y habilita el boton esto entiendo que esta v-bindeado con el disabled del boton y por eso funciona*/
    }
  },
  methods: { 
    submit($evt){
      /* $evt.preventDefault(); */
    },
    update(payload) {
      this[payload.name.toLowerCase()] = { /* Lowercaseo el value */
        value: payload.value, /* lo guardo en los inputs */
        valid: payload.valid
      }
    }
  }
}
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}

.form {
  margin: 0 auto;
  max-width: 400px;
  width: 50%;
}
</style>
