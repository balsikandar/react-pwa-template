import { todoItem } from 'types/todos';
import HTTP from 'utils/http';

export const getTodos = (): Promise<todoItem[]> => {
  return HTTP.get('users/1/todos');
};
