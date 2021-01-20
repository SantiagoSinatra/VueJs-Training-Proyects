import { createApp } from './node_modules/vue/dist/vue.esm-browser.js';

const app = createApp({
  template: `
  <button v-on:click="increment(5)">Increment</button>
  <!-- El v-on es como el de jquery o el onclick de javascript -->

  <p> {{ count }}</p> 
  <!-- Los objetos que contenga data() se interpolan y se actualizan automaticamente cuando cambia data -->`, /* Un template contiene el html que se va a ver */

  data() { /* Data devuelve objetos */
    return {
      count: 0
    }
  },
  methods: {
    increment(value) {
      this.count += value;
    }
  }
}).mount('#app'); /* Creo mi app en Vue y la monto sobre el div con el id "app" */

window.app = app;