const updateList = list => {
  return {
    type: 'update-list',
    reducer: state => ({
      ...state,
      todos: list
    })
  };
};

const setUpdate = bool => {
  return {
    type: 'set-update',
    reducer: state => ({
      ...state,
      isUpdated: bool
    })
  };
};

export { updateList, setUpdate };
