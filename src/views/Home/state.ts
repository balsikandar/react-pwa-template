import { useState } from 'react';
import { todoItem } from 'types/todos';

export const useComponentState = () => {
  let [todos, setTodoList] = useState<todoItem[]>([]);
  return {
    todos,
    setTodoList,
  };
};
