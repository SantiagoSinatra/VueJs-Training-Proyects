import { createApp } from './node_modules/vue/dist/vue.esm-browser.js';

const Num = { /* Componente separado que puede ser utilizado en cualquier parte del código */
  props: { /* Propiedades que va a recibir del padre en el que se lo incluya */
    theNumber: {
      type: Number,
      required: true
    }
  },
  template: `<div v-bind:class="getClass(theNumber)"> {{ theNumber }} </div>`,
  methods: {
    getClass(number){
      if(this.isEven(number)) {
        return 'red'
      } else {
        return 'blue'
      }
    },
    isEven(number){
      return number % 2 === 0
    }
  }
}

const app = createApp({
  components: { /* Declaro los componentes que voy a usar */
    Num
  },

  template: `
  <button v-on:click="increment(5)">Increment</button> <!--Esto tambien se puede escribir como @click= -->
  <!-- El v-on es como el de jquery o el onclick de javascript -->

  <p> {{ count }}</p> 
  <!-- Los objetos que contenga data() se interpolan y se actualizan automaticamente cuando cambia data --> 

  
  <num v-for="number in numbers" v-bind:theNumber="number" /> <!-- En esta linea estoy bindeando a la variable theNumber el valor que tiene number, que viene de data a mi componente separado Num -->
  
  
  <!-- <input @input="input" v-bind:value="value" /> -->
  <input type="checkbox" v-model="value" value="a"/>  <!-- Esto hace lo mismo que lo de arriba -->
  <input type="checkbox" v-model="value" value="b"/>

  {{ value }}

  <!-- <div v-if="error"> {{ error }} </div> -->

  `, /* Un template contiene el html que se va a ver */

  computed: { /* Vendrian a ser como propiedades inteligentes que se actualizan continuamente si hay un cambio no pueden llevar argumentos */
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
      value: ["a"],
    }
  },

  methods: { /* Contiene la lógica de la página osea las funciones y eso */
    increment(value) {
      this.count += value;
    },
    input($evt){
      this.value = $evt.target.value;
    }
  }
}).mount('#app'); /* Creo mi app en Vue y la monto sobre el div con el id "app" */

window.app = app;