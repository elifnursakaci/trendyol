interface Geolocation {
  lat: string;
  long: string;
}

interface Address {
  city: string;
  geolocation: Geolocation;
  number: number;
  street: string;
  zipcode: string;
}

interface Name {
  firstname: string;
  lastname: string;
}

interface UserInfo {
  __v: number;
  address: Address;
  email: string;
  id: number;
  name: Name;
  password: string;
  phone: string;
  username: string;
}

interface AuthTypes {
  token: string;
  isLogin: boolean;
  pending: boolean;
  error: string | object;
  userInfo: UserInfo | null;
}

export type {AuthTypes, UserInfo};
