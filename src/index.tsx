import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import './assets/styles/_general.css'
import './assets/styles/_normalize.css'
import './assets/fonts/GothamPro/stylesheet.css'
import { Provider } from 'react-redux';
import { store } from './redux';
import * as Sentry from "@sentry/react";

Sentry.init({
    dsn: "https://2aecb96818fc9e543aac9f8cc8106438@o4504668609642496.ingest.us.sentry.io/4506984237105152",
    integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration({
            maskAllText: false,
            blockAllMedia: false,
        }),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ["localhost", /^https:\/\/smallstash\.gg\/api/],
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
