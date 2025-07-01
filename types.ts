import { TransactionType } from "./src/shared/types/enums";

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
  default: boolean;
  name: string;
  description: string;
  balanceIncome: number;
  balanceExpend: number;
}

export interface HistoryItem {
  id: string;
  type: TransactionType;
  categoryId: string;
  amount: number;
  date: string;
}
