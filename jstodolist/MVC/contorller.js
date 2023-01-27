import { View } from "./view.js";
import { Model } from "./model.js";

//* ~~~~~~~~~~~~~~~~~~~~~~~~ Controller ~~~~~~~~~~~~~~~~~~~~~~~~
export const Controller = ((model, view) => {
  const state = new model.State();

  const addTodo = () => {
    const inputbox = document.querySelector(view.domstr.inputbox);
    inputbox.addEventListener('keyup', event => {
      const inputstate = event.target.value;
      if (event.code === 'Enter' && inputstate.trim() !== '') {
        const newTodo = new model.Todo(inputstate);
        model.addTodo(newTodo).then(val => {
          state.todos = [val, ...state.todos];
        });
        event.target.value = '';
      }
    })
  }

  const deleteTodo = () => {
    const todo_container = document.querySelector(view.domstr.todolist);
    todo_container.addEventListener('click', event => {
      if (event.target.className === 'deletebtn') {
        const id = event.target.id;
        state.todos = state.todos.filter(ele => {
          return +ele.id !== +id;
        });
        model.deleteTodo(id);
      }
    });
  }

  const init = () => {
    model.getTodos().then((todos) => {
      state.todos = todos.reverse();
    });
  };

  const bootstrap = () => {
    init();
    deleteTodo();
    addTodo();
  }

  return {
    bootstrap,
  };
})(Model, View);