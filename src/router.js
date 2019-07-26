import React from 'react';
import { routerRedux, Route, Switch } from '@/components/reduxaga/router';
import IndexPage from '@/pages';

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Route path="/" exact component={IndexPage} />
    </ConnectedRouter>
  );
}

export default RouterConfig;
