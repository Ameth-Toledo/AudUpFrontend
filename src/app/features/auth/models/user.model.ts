export interface User {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  secondLastName: string;
  email: string;
  roleId: number;
  phone: string;
  profileImage?: string;
}