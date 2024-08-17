import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

interface Task {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
}

const API_URL = 'http://localhost:3000/tasks';

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      Swal.fire('Error', 'Failed to fetch tasks', 'error');
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (title: string, description: string) => {
    try {
      const response = await axios.post(API_URL, { title, description });
      setTasks([...tasks, response.data]);
      Swal.fire('Success', 'Task added successfully', 'success');
    } catch (error) {
      console.error('Error adding task:', error);
      Swal.fire('Error', 'Failed to add task', 'error');
    }
  };

  const updateTask = async (id: string, updatedTask: Partial<Task>) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedTask);
      setTasks(tasks.map(task => task._id === id ? response.data : task));
      Swal.fire('Success', 'Task updated successfully', 'success');
    } catch (error) {
      console.error('Error updating task:', error);
      Swal.fire('Error', 'Failed to update task', 'error');
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
      Swal.fire('Success', 'Task deleted successfully', 'success');
    } catch (error) {
      console.error('Error deleting task:', error);
      Swal.fire('Error', 'Failed to delete task', 'error');
    }
  };

  return { tasks, addTask, updateTask, deleteTask, loading };
};

export default useTasks;
