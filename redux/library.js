function createStore(reducer) {
  let state;
  let listeners = [];

  //getState
  const getState = () => state;

  //subscribe
  const subscribe = (listener) => {
    listeners.push(listener);

    //for unsubscribe
    return () => {
      listeners = listeners.filter((l) => listener !== l);
    };
  };

  //dispatch
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };
  return {
    getState,
    subscribe,
    dispatch,
  };
}

module.exports = {
  createStore,
};
