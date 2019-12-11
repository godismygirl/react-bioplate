/* eslint-disable no-undef */

import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { Button } from 'antd';
import { setUpdate } from './actions';

import style from './App.less';

const mapState = state => ({
  isUpdated: state.isUpdated,
  todos: state.todos
});

export default () => {
  const dispatch = useDispatch();
  const { isUpdated, todos } = useMappedState(mapState);

  const toggleUpdate = () => {
    dispatch(setUpdate(!isUpdated));
  };
  console.log(isUpdated);
  return (
    <div className={style.test}>
      <span>
        isUpdated:
        {isUpdated ? 'true' : 'false'}
      </span>
      <Button type="primary" onClick={toggleUpdate}>
        set update
      </Button>
      <ul>
        {todos.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
