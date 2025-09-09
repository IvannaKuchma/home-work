export enum TransactionType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export interface User {
  id: string;
  name: string;
  password: string;
  photo: string;
  email: string;
  startBalance: number;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  income: number;
  expense: number;  
  isDefault: boolean;
}

export interface HistoryItem {
  id: string;
  title: string;
  amount: number;
  type: TransactionType;
  categoryId: string;
  date: string;
}