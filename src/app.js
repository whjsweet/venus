import models from "@/models";
import Page from "@/pages";
import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux';

const store = createStore(models);
const App = () => {

    return (
        <Provider store={store}>
            <div>hello</div>
            <Page />
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById("main"));
