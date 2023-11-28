'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            todos: [
                { text: 'Feed the cats', done: false },
                { text: 'Reading books', done: true },
                { text: 'Holidays planning', done: false },
                { text: 'Call Mario', done: false },
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
        },
        changeDoneStatus(index) {
            if (this.todos[index].done === true) {
                this.todos[index].done = false;
            }
            else this.todos[index].done = true;
        }
    }
}).mount('#app');

