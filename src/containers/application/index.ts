import { useCallback } from 'react';
import { ApplicationState } from './state';

export const useApplicationContainer = () => {
  const AppState = ApplicationState.useContainer();

  const onLoginSuccess = useCallback(() => {
    AppState.setloginStatus(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onInitSuccess = useCallback(() => {
    AppState.setAppInitFlag(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    onLoginSuccess,
    onInitSuccess,
  };
};
