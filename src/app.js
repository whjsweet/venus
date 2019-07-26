import models from "@/models";
import Page from "@/pages";
import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import reduxaga from "@/components/reduxaga";


const app = reduxaga();
// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models').default);

// 4. Router
var router = require('./router').default;
console.log(router)
app.router(router);

// 5. Start
app.start('#main');


// const App = () => {
//     return (
//         <Provider store={store}>
//             <div>hello</div>
//             <Page />
//         </Provider>
//     );
// }

// ReactDOM.render(<App />, document.getElementById("main"));
