<template>
  <div class="input-wrapper">
    <div class="label">
      <label :for="name">{{ name }}</label>
      <div class="error">{{ error }}</div> <!-- imprime el error que salga dependiendo el value que haya -->
    </div>
    <input
      :id="name" 
      :type="type"
      :value = "value"
      @input="input"
    />
    <!-- (lo de arriba estaba con v-model en el commit anterior)v-model: es el shorthand para v-bind:value="value" @input="value" = $event || basicamente y mágicamente escucha el valor que tenga el input apenas lo uso y va actualizando la variable que ponga en data() -->
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
    },
    value: {
      type: String
    },
    type: {
      type: String
    }
  },
  /* data() {
    return {
      value: '' /* Variable del input que escucho con el v-model */
    /*}
  },
  */
  computed: {
    error() {
      /* Con ese value hago las validaciones correspondientes dentro de una funcion en computed que se ejecuta en cada instancia nueva (osea cada vez que cambia el value) */
      /* console.log("me ejecuto") descomentar esta linea para ver como actua :D*/
      return this.validate(this.value); /* Movi lo que hacía error() a otra función en methods */
    }
  },
  methods: {
    validate(value) {
      if(this.rules.required && !value.length === 0) {
        return 'Required';
      }
      if(this.rules.min && value.length < this.rules.min) {
        return `Minimum length is  ${this.rules.min}`;
      }
    },
    input($evt) {
      this.$emit('update', {
        value: $evt.target.value,
        name: this.name, 
        valid: this.validate($evt.target.value) ? false : true /* Me fijo si la funcion validate retorna un string y si es asi lo dejo como falso y sino lo hago true. (si retorna un string quiere decir que algo está mal) */
      }); /* emito un evento llamado update al padre con el value del input, el name, y la validación */
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