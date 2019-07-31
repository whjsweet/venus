import { BrowserRouter, Route, Switch } from '@/frames/reduxaga/router';
import IndexPage from '@/pages';
import React from 'react';

import Layout from "@/layouts/BackendLayout";

export default function RouterConfig() {
  return (
    <BrowserRouter >
      <Route path="/index" component={IndexPage} />
    </BrowserRouter>
  );
}
