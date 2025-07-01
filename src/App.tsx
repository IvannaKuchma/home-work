import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { fetchUserById } from '@/store/slices/userSlice';
import { fetchCategories } from '@/store/slices/categorySlice';
import { fetchHistory } from '@/store/slices/historySlice';

import MainPage from '@/pages/MainPage';

const App: React.FC = () => {
  useEffect(() => {
    store.dispatch(fetchUserById('1'));
    store.dispatch(fetchCategories());
    store.dispatch(fetchHistory());
  }, []);

  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
};

export default App;