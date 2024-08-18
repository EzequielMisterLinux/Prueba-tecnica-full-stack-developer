import axios from 'axios';
import { Task } from '../types/types';  

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw new Error('Failed to fetch tasks');
  }
};

export const addTask = async (title: string, description: string): Promise<Task> => {
  try {
    const response = await axios.post(API_URL, { title, description });
    return response.data;
  } catch (error) {
    console.error('Error adding task:', error);
    throw new Error('Failed to add task');
  }
};

export const updateTask = async (id: string, updatedTask: Partial<Task>): Promise<Task> => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedTask);
    return response.data;
  } catch (error) {
    console.error('Error updating task:', error);
    throw new Error('Failed to update task');
  }
};

export const deleteTask = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting task:', error);
    throw new Error('Failed to delete task');
  }
};
