import { useState } from 'react';
import { createContainer } from 'unstated-next';
import { ApplicationStateProps } from './types';

const defaultInitialState: ApplicationStateProps = {
  appInitiated: false,
  loggedIn: false,
};

const useApplicationState = (initialState = defaultInitialState) => {
  // State Properties
  let [appInitiated, setAppInitFlag] = useState(initialState.appInitiated);
  let [loggedIn, setloginStatus] = useState(initialState.loggedIn);

  return {
    appInitiated,
    loggedIn,
    setAppInitFlag,
    setloginStatus,
  };
};

// Export Application Context
export const ApplicationState = createContainer(useApplicationState);
