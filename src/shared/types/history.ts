export interface History {
  id: string;
  type: 'income' | 'expense';
  categoryId: string;
  amount: number;
  date: string;
  comment?: string;
}
