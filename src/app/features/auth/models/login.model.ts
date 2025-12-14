export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  data: {
    token: string;
    userId: number;
    roleId: number;
    name: string;
    email: string;
    profileImageUrl: string;
  };
}