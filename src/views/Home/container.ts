import { getTodos } from 'apis/todo';
import { useEffect } from 'react';
import { useComponentState } from './state';

export const useComponentContainer = () => {
  const State = useComponentState();

  useEffect(() => {
    getTodos()
      .then((result) => State.setTodoList(result))
      .catch(() => State.setTodoList([]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    State,
  };
};
