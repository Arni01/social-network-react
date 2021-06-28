import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import store from './redux/state';
import App from './App';
import reportWebVitals from './reportWebVitals';

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          appState={store.getState()}
          dispatch={(action) => store.dispatch(action)}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderEntireTree();

store.subscribe(rerenderEntireTree);
