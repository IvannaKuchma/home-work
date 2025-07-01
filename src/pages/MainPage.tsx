import React from 'react';
import { useAppSelector } from '../store/hooks';
import UserProfile from '../components/UserProfile';
import CategoriesList from '../components/CategoriesList';
import HistoryList from '../components/HistoryList';
import '../styles/MainPage.css';


const MainPage: React.FC = () => {
  const { data: user, loading: userLoading, error: userError } = useAppSelector(state => state.user);
  const { data: categories, loading: categoriesLoading, error: categoriesError } = useAppSelector(state => state.categories);
  const { data: histories, loading: historyLoading, error: historyError } = useAppSelector(state => state.histories);

  return (
  <div className="main-container">
  <div className="section user">
    <UserProfile user={user} loading={userLoading} error={userError} />
  </div>
  <div className="section categories">
    <CategoriesList data={categories} loading={categoriesLoading} error={categoriesError}/>
  </div>
  <div className="section history">
    <HistoryList histories={histories || []} loading={historyLoading} error={historyError} />
  </div>
</div>
  );
};

export default MainPage;