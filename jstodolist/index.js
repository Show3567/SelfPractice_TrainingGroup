console.clear();

//* ~~~~~~~~~~~~~~~~~~~~~~~~ Api ~~~~~~~~~~~~~~~~~~~~~~~~
const Api = (() => {
  // const baseUrl = "https://jsonplaceholder.typicode.com";
  const baseUrl = 'http://localhost:4232'
  const todopath = "todos";

  const getTodos = () =>
    fetch([baseUrl, todopath].join("/")).then((response) =>
      response.json()
    );

  const deleteTodo = (id) =>
    fetch([baseUrl, todopath, id].join("/"), {
      method: "DELETE",
    });

  const addTodo = (todo) =>
    fetch([baseUrl, todopath].join("/"), {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());

  return {
    getTodos,
    addTodo,
    deleteTodo
  };
})();

//* ~~~~~~~~~~~~~~~~~~~~~~~~ View ~~~~~~~~~~~~~~~~~~~~~~~~
const View = (() => {
  const domstr = {
    todolist: "#todolist_container",
    deletebtn: '.deletebtn',
    inputbox: '.todolist__input'
  };

  const render = (ele, tmp) => {
    ele.innerHTML = tmp;
  };
  const createTmp = (arr) => {
    let tmp = "";
    arr.forEach((ele) => {
      tmp += `
        <li>
          <span>${ele.id}-${ele.title}</span>
          <button class="deletebtn" id="${ele.id}">X</button>
        </li>
      `;
    });
    return tmp;
  };

  return {
    domstr,
    render,
    createTmp,
  };
})();
//* ~~~~~~~~~~~~~~~~~~~~~~~~ Model ~~~~~~~~~~~~~~~~~~~~~~~~
const Model = ((api, view) => {
  const { getTodos, addTodo, deleteTodo } = api;

  class Todo {
    constructor(title) {
      this.userId = 66;
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
    getTodos,
    addTodo,
    deleteTodo,
    State,
    Todo
  };
})(Api, View);

//* ~~~~~~~~~~~~~~~~~~~~~~~~ Controller ~~~~~~~~~~~~~~~~~~~~~~~~
const Controller = ((model, view) => {
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

Controller.bootstrap();

