import { createApp } from './node_modules/vue/dist/vue.esm-browser.js';

const Num = { /* Componente separado que puede ser utilizado en cualquier parte del código */
  props: { /* Propiedades que va a recibir del padre en el que se lo incluya */
    theNumber: {
      type: Number,
      required: true
    }
  },
  template: `<button v-bind:class="getClass(theNumber)" @click="handleClick"> {{ theNumber }} </button>`,
  methods: {
    handleClick(){
      this.$emit('chosenNumber', this.theNumber); /* Las cosas que tienen el signo $ adelante son funciones propias de vue */
    },
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

  template: `<num v-for="number in numbers" v-bind:theNumber="number" @chosenNumber="putInArray" /> <!-- En esta linea estoy bindeando a la variable theNumber el valor que tiene number, que viene de data a mi componente separado Num -->
  <h3>Clicked Numbers:</h3>
  <num v-for="number in clickedNumbers" v-bind:theNumber="number" />`, /* Un template contiene el html que se va a ver */

  data() { /* Data devuelve objetos */
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      clickedNumbers: []
    }
  },

  methods: { /* Contiene la lógica de la página osea las funciones y eso */
    putInArray(number){
      this.clickedNumbers.push(number);
    }
  }
}).mount('#app'); /* Creo mi app en Vue y la monto sobre el div con el id "app" */

window.app = app;