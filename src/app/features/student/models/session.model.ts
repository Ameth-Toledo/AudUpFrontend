export interface Session {
  session_id: string;
  subject_id: number;
  subject_name: string;
  teacher_id: number;
  teacher_name: string;
  title: string;
  description: string | null;
  session_date: string;
  status: string;
  started_at: string | null;
  ended_at: string | null;
  duration_minutes: number | null;
}

export interface SessionsResponse {
  message: string;
  data: Session[];
  total: number;
}