export type Status = 'pending' | 'completed' | 'in-progress';

export type Entry = {
  id: string;
  description: string;
  createdAt: number;
  status: Status
};
