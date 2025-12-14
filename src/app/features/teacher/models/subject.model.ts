export interface Subject {
  subject_id: number;
  subject_name: string;
  description: string;
  teacher_id: number;
  teacher_name: string;
  grade_level: string;
  school_year: string;
  code: string;
  is_active: boolean;
  created_at: string;
}

export interface SubjectsResponse {
  message: string;
  data: Subject[];
  total: number;
}

export interface CreateSubjectRequest {
  subject_name: string;
  description: string;
  grade_level: string;
  school_year: string;
}

export interface UpdateSubjectRequest {
  subject_name?: string;
  description?: string;
  grade_level?: string;
  school_year?: string;
  is_active?: boolean;
}