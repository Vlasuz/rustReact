import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import './assets/styles/_general.css'
import './assets/styles/_normalize.css'
import './assets/fonts/GothamPro/stylesheet.css'
import { Provider } from 'react-redux';
import { store } from './redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
