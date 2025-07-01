import React from 'react';
import { HistoryItem } from '../shared/types';

interface HistoryListProps {
  histories: HistoryItem[];
  loading: boolean;  
  error: string | null;
}

const HistoryList: React.FC<HistoryListProps> = ({ histories, loading, error }) => {
  if (loading) return <div>Loading history...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!histories.length) return <div>No history found</div>;

  return (
 <ul>
  {histories.map(h => (
    <li key={h.id} className="history-item">
        {h.title} — {h.amount} ({h.type})
    </li>
  ))}
</ul>


  );
};

export default HistoryList;
