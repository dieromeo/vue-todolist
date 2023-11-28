'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            todos: [
                { text: 'primo todo', done: false },
                { text: 'secondo todo', done: true },
                { text: 'terzo todo', done: false },
                { text: 'quarto todo', done: false },
            ]
        };
    },
    methods: {
        removeTodo(index) {
            this.todos.splice(index, 1);
        }
    }
}).mount('#app');

