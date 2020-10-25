import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './Components/App';
// eslint-disable-next-line
import * as serviceWorker from './serviceWorker';
import {history, store} from "./Store/CreateStore";
import {initApp} from "./Core/Actions/InitActions";
import {Provider} from "react-redux";


export const initCoreApp = (store = {}, history = {}) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

store.dispatch(initApp());
initCoreApp(store, history);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
