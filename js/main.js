'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            todos: [
                { text: 'primo todo', done: false },
                { text: 'secondo todo', done: false },
                { text: 'terzo todo', done: true },
                { text: 'quarto todo', done: false },
            ]
        };
    },
}).mount('#app');

