/**
 * @name app.js
 * @fileoverview Exports the frontend application as <App/> Component,
 * Initialises Application Routes using react-router and React components from /views.
 * Renders global state providers.
 */

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes';
import { ApplicationState } from 'containers/application/state';
import 'utils/localization';

const App = () => {
  return (
    <ApplicationState.Provider>
      <Router>
        <Routes />
      </Router>
    </ApplicationState.Provider>
  );
};

export default App;
