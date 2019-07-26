import { Router, Route } from '@/components/reduxaga/router';
import IndexPage from '@/pages';
import React from 'react';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
    </Router>
  );
}

export default RouterConfig;