import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/pages/App';
import {Blog} from "./pages/Blog";
import {NotFound} from "./pages/NotFound";
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./redux";
import {BrowserRouter, Router, Switch, Route} from "react-router-dom";
import {Routes} from "react-router";

import {createBrowserHistory} from "history";

const history = createBrowserHistory()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                        <Route path='/' element={<App/>} />
                        <Route path='/blog' element={<Blog/>} />
                        <Route path='*' element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
