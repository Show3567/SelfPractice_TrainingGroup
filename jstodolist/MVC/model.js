import { Api } from "./api.js";
import { View } from "./view.js";

//* ~~~~~~~~~~~~~~~~~~~~~~~~ Model ~~~~~~~~~~~~~~~~~~~~~~~~
export const Model = ((api, view) => {
  const { getTodos: rename, addTodo, deleteTodo } = api;

  class Todo {
    constructor(title) {
      this.userId = 5;
      this.title = title;
      this.completed = false;
    }
  }
  class State {
    #todos = [];

    get todos() {
      return this.#todos;
    }

    set todos(newtodos) {
      this.#todos = newtodos;

      const todo_container = document.querySelector(view.domstr.todolist);
      const tmp = view.createTmp(this.#todos);
      view.render(todo_container, tmp);
    }
  }

  return {
    getTodos: rename,
    addTodo,
    deleteTodo,
    State,
    Todo
  };
})(Api, View);