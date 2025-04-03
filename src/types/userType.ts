export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  countryName?: string;
  number?: string;
  pictureUrl?: string;
}