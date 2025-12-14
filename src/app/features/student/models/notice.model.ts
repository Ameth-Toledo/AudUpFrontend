export interface Notice {
  notice_id: number;
  subject_id: number;
  subject_name: string;
  session_id: string;
  session_title: string;
  teacher_id: number;
  teacher_name: string;
  title: string;
  content: string;
  created_at: string;
}

export interface NoticesResponse {
  message: string;
  data: Notice[];
  total: number;
}