export type Priority = 'High' | 'Medium' | 'Low' | null;

export interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
  assignedDate?: Date;
  assignedTo?: string;
  priority: Priority;
}