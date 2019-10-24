export interface AccountData {
  id: any;
  name: string;
  description?: string;
  account_balance?: number;
}

export interface Category {
  id: number;
  name: string;
}

export interface Payee {
  id: number;
  name: string;
}

export interface Transaction {
  id: number;
  author: any;
  type: number;
  payee: any;
  category: any;
  description: string;
  amount: number;
  date: Date;
}

export interface Payee {
  id: number;
  username: string;
  date_joined: Date;
}
