const { createStore } = require("./library");

const { rootReducer } = require("./reducers");

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log("New state is : ", store.getState());
});

module.exports = {
  store,
};
