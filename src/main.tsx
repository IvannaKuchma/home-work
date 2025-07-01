import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './pages/MainPage';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './styles/style.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <MainPage />
    </Provider>
  </React.StrictMode>
);
