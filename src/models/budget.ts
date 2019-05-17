export interface Account{
    id: Number;
    name:String;
    description?: String;
    account_balance?: Number;
  }

export interface Category{
    id: Number;
    name:String;
  }

export interface Payee{
    id: Number;
    name:String;
  }

export interface Transaction{
    id: Number;
    author: any;
    type: Number;
    payee: any;
    category: any;
    description: String;
    amount: Number;
    date: Date;
  }

  export interface Payee{
    id: Number;
    username: String;
    date_joined: Date;
  }