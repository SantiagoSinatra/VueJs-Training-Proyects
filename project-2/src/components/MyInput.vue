<template>
  <div class="input-wrapper">
    <div class="label">
      <label :for="name">{{ name }}</label>
      <div class="error">{{ error }}</div> <!-- imprime el error que salga dependiendo el value que haya -->
    </div>
    <input
      :id="name" 
      type="text"
      v-model="value" 
    />
    <!-- v-model: es el shorthand para v-bind:value="value" @input="value" = $event || basicamente y mágicamente escucha el valor que tenga el input apenas lo uso y va actualizando la variable que ponga en data() -->
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    rules: {
      type: Object // min, required
    }
  },
  data() {
    return {
      value: '' /* Variable del input que escucho con el v-model */
    }
  },
  computed: {
    error() {
      /* Con ese value hago las validaciones correspondientes dentro de una funcion en computed que se ejecuta en cada instancia nueva (osea cada vez que cambia el value) */
      /* console.log("me ejecuto") descomentar esta linea para ver como actua :D*/
      if(this.rules.required && this.value.length === 0) {
        return 'Required';
      }
      if(this.rules.min && this.value.length < this.rules.min) {
        return `Minimum length is  ${this.rules.min}`;
      }
    }
  }
  
}
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
}

.error {
  color: red;
}

.label {
  display: flex;
  justify-content: space-between;
}

input {
  margin: 5px 0;
  padding: 10px;
  font-size: 16px;
  background: none;
  color: black;
  border: 1px solid silver;
  border-radius: 5px;
}
</style>