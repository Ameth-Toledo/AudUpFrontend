export interface RegisterRequest {
  firstName: string;
  middleName: string;
  lastName: string;
  secondLastName: string;
  email: string;
  password: string;
  roleId: number;
  phone: string;
  profileImage?: File;
}

export interface RegisterResponse {
  message: string;
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
  };
}