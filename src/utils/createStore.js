import { createStore } from 'redux';

const reducer = (state, action) => {
  if (typeof action.reducer === 'function') {
    return action.reducer(state);
  }
  return state;
};

export default state => {
  return createStore(reducer, state);
};
