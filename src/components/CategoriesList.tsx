import React from 'react';import { Category } from '../shared/types/category'; 


interface CategoriesListProps {
  data: Category[];
  loading: boolean;
  error: string | null;
    h?: React.ReactNode; 
}

const CategoriesList: React.FC<CategoriesListProps> = ({ data, loading, error, h }) => {
  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data.length) return <p>No categories found</p>;

  return (
    <section style={{ background: '#fff', padding: 10, borderRadius: 8 }}>
      {h && <div>{h}</div>}
      <h2>Categories</h2>
      <ul>
        {data.map(cat => (
          <li key={cat.id} className="list-item">
             <strong>{cat.name}</strong> — <br />
              Income: {cat.balanceIncome}, Expense: {cat.balanceExpend}
          </li>
))}

</ul>

    </section>
  );
};

export default CategoriesList;
