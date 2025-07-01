export interface HistoryItem {
  id: string;
  title: string;
  date: string;
  amount: number;
  type: 'income' | 'expense';
  categoryTitle: string;
}
