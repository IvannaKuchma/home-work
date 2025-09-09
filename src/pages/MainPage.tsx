import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchUserById } from '../store/slices/userSlice';
import { fetchCategories } from '../store/slices/categorySlice';
import { fetchHistory } from '../store/slices/historySlice'; 

const MainPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const user = useSelector((state: RootState) => state.user.data);
  const categories = useSelector((state: RootState) => state.category.data);

  useEffect(() => {
    dispatch(fetchUserById('1'));
    dispatch(fetchCategories());
    dispatch(fetchHistory()); 
  }, [dispatch]);

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: '250px', padding: '20px', background: '#f0f0f0' }}>
        {user && (
          <div style={{ textAlign: 'center' }}>
            <img
              src={user.photo}
              alt="User"
              style={{ width: '100px', borderRadius: '50%' }}
            />
            <h3>{user.name}</h3>
            <p>Start Balance: ${user.startBalance}</p>
          </div>
        )}
      </aside>

      <main style={{ flex: 1, padding: '20px' }}>
        <h2>Categories</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '1rem',
          }}
        >
          {categories.map((cat: any) => (
            <div
              key={cat.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: '10px',
                background: '#fff',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              }}
            >
              <h4>{cat.name}</h4>
              <p>Income: ${cat.balanceIncome}</p>
              <p>Expense: ${cat.balanceExpend}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MainPage;
