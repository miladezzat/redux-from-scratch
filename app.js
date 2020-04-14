const { store } = require("./redux/store");
const {
  addTodo,
  removeTodo,
  toggleTodo,
  addGoal,
  removeGoal,
} = require("./redux/actions");

store.dispatch(addTodo({ id: 0, name: "Play", complete: false }));
store.dispatch(addTodo({ id: 1, name: "Play", complete: false }));
store.dispatch(addTodo({ id: 2, name: "Play", complete: false }));
store.dispatch(removeTodo(1));
store.dispatch(toggleTodo(0));
store.dispatch(addGoal({ id: 0, name: "Play" }));
store.dispatch(addGoal({ id: 1, name: "Play" }));
store.dispatch(addGoal({ id: 2, name: "Play" }));
store.dispatch(removeGoal(0));
