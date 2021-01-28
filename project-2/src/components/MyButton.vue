<template>
  <button v-bind:style="{ background: background, color }" v-bind:class="{ 'disabled-button' : disabled }">
    Button
  </button> 
  <!-- Por ejemplo acá estoy usando la variable background y el valor lo asigno en el padre App.vue --> 
  <!-- Además si tengo el mismo nombre de variable que el nombre de propiedad puedo omitir el nombre de la propiedad como hice con el color -->
  <!-- Tambien puedo usar los : para preguntar el estado de una variable, en este caso disabled (que viene del padre App.vue y realizar una accion, en este caso, agregar una clase 'disabled-button' vendria a ser como un if ternario aprox) -->
</template>

<script>
export default {
  props: { /* Propiedades que se exportan al padre y se leen en este componente (y se usan como variables para realizar algun comportamiento (ver arriba)) */
    color: {
      type: String
    },
    background: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  }
}
</script>

<style scoped>
button {
  background: none;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 10px 40px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  filter: brightness(125%);
}

.disabled-button {
  opacity: 0.5;
}
</style>