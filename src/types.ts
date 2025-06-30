export interface User {
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
    type: 'income' | 'expense';
    categoryId: string;
    amount: number;
    date: string;
}