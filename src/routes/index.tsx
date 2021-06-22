/**
 * @name routes/index.tsx
 * @fileoverview Exports the frontend application's Router component,
 * Imports all the views defined in /views,
 * Each Route renders a React Component (views) out of /views,
 * Views are react components composed out of other react components from /components.
 */

import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'views/Home';

const Routes = () => {
  return (
    <div className='app-container'>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={'/'} component={Home} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Routes;
