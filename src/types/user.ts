export interface IUser {
  id: number;
  name: string;
  email: string;
  address: Address;
  phone: string;
  company: Company
}

interface Company {
  name: string
}

interface Address {
  street: string;
  suite: string;
  city: string;
}

export interface UsersState {
  users: IUser[];
  error: string;
  isLoading: boolean;
}
