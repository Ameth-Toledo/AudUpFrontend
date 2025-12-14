export interface JoinAsignaturaRequest {
  class_code: string;
}

export interface JoinAsignaturaResponse {
  message: string;
  data: {
    enrollment_id: number;
    subject_id: number;
    student_id: number;
    status: string;
    enrolled_at: string;
  };
}