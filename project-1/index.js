import { createApp } from './node_modules/vue/dist/vue.esm-browser.js';

const app = createApp({
  template: `
  <button v-on:click="increment(5)">Increment</button> <!--Esto tambien se puede escribir como @click= -->
  <!-- El v-on es como el de jquery o el onclick de javascript -->

  <p> {{ count }}</p> 
  <!-- Los objetos que contenga data() se interpolan y se actualizan automaticamente cuando cambia data -->

  <div v-if="isEven(count)">
    Even
  </div>
  <div v-else> <!-- El v-else tiene que estar pegado al v-if para que funcione -->
    Odd
  </div>

  <div v-for="number in numbers">
    <!-- <div v-show="isEven(number)">  El v-show hace casi lo mismo que el v-if pero crea el div con un display: none -->
    <div v-bind:class="getClass(number)" v-bind:title="number"> <!-- El v-bind me permite de alguna forma conectar el vue con el html -->
      {{ number }}
    </div>
    <!-- </div> -->
  </div>

  <input @input="input" v-bind:value="value" />
  <div v-if="error"> {{ error }} </div>

  `, /* Un template contiene el html que se va a ver */

  computed: { /* Vendrian a ser como propiedades inteligentes que se actualizan continuamente si hay un cambio no pueden llevar argumentos */
    evenList() {
      return this.numbers.filter(num => this.isEven(num));
    },
    error() {
      if (this.value.length < 7) { 
        return "Too short";
      }
    }
  },

  data() { /* Data devuelve objetos */
    return {
      count: 0,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      value: "User",
    }
  },

  methods: { /* Contiene la lógica de la página osea las funciones y eso */
    increment(value) {
      this.count += value;
    },
    isEven(number){
      return number % 2 === 0
    },
    getClass(number){
      if(this.isEven(number)) {
        return 'red'
      } else {
        return 'blue'
      }
    },
    input($evt){
      this.value = $evt.target.value;
    }
  }
}).mount('#app'); /* Creo mi app en Vue y la monto sobre el div con el id "app" */

window.app = app;