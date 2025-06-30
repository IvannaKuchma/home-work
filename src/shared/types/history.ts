import { TransactionType } from './enums';

export interface HistoryItem {
  id: string;
  type: TransactionType;
  categoryId: string;
  amount: number;
  date: string;
}
