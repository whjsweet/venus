import React from 'react';
import ReactDOM from "react-dom";
import { LocaleProvider } from 'antd';
import reduxaga from "@/frames/reduxaga";

const app = reduxaga();
// 2. Plugins
// app.use({});
// 3. Model
app.model(require('./models').default);
// 4. Router
app.router(require('./router').default);
// 5. Start
const App = app.start();

const appLocale = window.appLocale;
const LocalWrapper = () => {
    return (
        <LocaleProvider locale={appLocale}>
            <App />
        </LocaleProvider>
    );
}

ReactDOM.render(<LocalWrapper />, document.getElementById("main"));
