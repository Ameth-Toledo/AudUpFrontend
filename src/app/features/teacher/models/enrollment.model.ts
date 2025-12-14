export interface Enrollment {
  enrollment_id: number;
  subject_id: number;
  subject_name: string;
  student_id: number;
  student_name: string;
  enrolled_at: string;
  status: string;
}

export interface EnrollmentsResponse {
  message: string;
  data: Enrollment[];
  total: number;
}