export interface IUserResponse {
  limit: number;
  skip: 0;
  total: number;
  users: IUser[];
}

export interface INewUser {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  birthDate: string | null;
  image: string | null;
  framework: string | null;
  language: string | null;
}

export interface IUser extends INewUser {
  id: number;
  maidenName: string;
  age: number;
  gender: string;
  phone: string;
  username: string;
  password: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  domain: string;
  ip: string;
  address: {
    address: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    postalCode: string;
    state: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    address: {
      address: string;
      city: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      postalCode: string;
      state: string;
    };
    department: string;
    name: string;
    title: string;
  };
  ein: string;
  ssn: string;
  userAgent: string;
}
