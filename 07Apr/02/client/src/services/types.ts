export interface Trainer {
  _id?: string;
  name: string;
  skills: string[];
  photo: string;
  status: "Active" | "Inactive";
}