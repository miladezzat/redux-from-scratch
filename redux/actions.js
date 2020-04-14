const {
  ADD_GOAL,
  REMOVE_GOAL,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} = require("./constants");

const addTodo = (todo) => ({
  type: ADD_TODO,
  todo,
});
const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
});
const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

const addGoal = (goal) => ({
  type: ADD_GOAL,
  goal,
});
const removeGoal = (id) => ({
  type: REMOVE_GOAL,
  id,
});

module.exports = {
  addTodo,
  removeTodo,
  toggleTodo,
  addGoal,
  removeGoal,
};
