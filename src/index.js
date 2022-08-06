import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './RHONDA_BANKING/containers/App';
import reportWebVitals from './reportWebVitals';
import reducer from './RHONDA_BANKING/store/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
      </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
