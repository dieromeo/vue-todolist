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
            ],

            inputText: '',
        };
    },
    methods: {
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
        addTodo() {
            if (this.inputText.trim() !== '') {
                this.todos.push({ text: this.inputText, done: false });
                this.inputText = '';
            }
        }
    }
}).mount('#app');

