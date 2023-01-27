//* ~~~~~~~~~~~~~~~~~~~~~~~~ View ~~~~~~~~~~~~~~~~~~~~~~~~
export const View = (() => {
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