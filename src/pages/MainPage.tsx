import React from 'react';

const MainPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: '250px', background: '#f5f5f5', padding: '1rem' }}>
        <h3>Sidebar</h3>
        {}
      </aside>
      <main style={{ flex: 1, padding: '1rem' }}>
        <h1>Головна сторінка</h1>
        {}
      </main>
    </div>
  );
};

export default MainPage;