import { Schema, Document } from 'mongoose';

export interface Task extends Document {
  title: string;
  description: string;
  completed: boolean;
}

export const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
});
