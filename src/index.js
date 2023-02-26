import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./Redux/Reducers/rootReducer";
import {Provider} from "react-redux";
import {BrowserTracing} from "@sentry/tracing";
import * as Sentry from "@sentry/react";
import {logger} from "./middleware/logger";

Sentry.init({
    dsn: "https://ec63521dd9a842c6ba33290aaf07ba70@o4504668609642496.ingest.sentry.io/4504668613443584",
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
});


const root = ReactDOM.createRoot(document.getElementById('root'));
// compose(applyMiddleware(logger))
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);
