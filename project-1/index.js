import { createApp } from './node_modules/vue/dist/vue.esm-browser.js';

const app = createApp({
  template: `Hello {{ person.name }} you have {{ person.age }} years old <!-- Los objetos que contenga data() se interpolan -->`,

  data() { /* Data devuelve objetos */
    return {
      msg: 'world',
      person: {
        name: "Santiago",
        age: 23
      }
    }
  }
}).mount('#app'); /* Creo mi app en Vue y la monto sobre el div con el id "app" */