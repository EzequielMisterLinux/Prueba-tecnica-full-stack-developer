import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { fetchTasks as fetchTasksApi, addTask as addTaskApi, updateTask as updateTaskApi, deleteTask as deleteTaskApi } from '../api/tasksApi';
import { Task } from '../types/types';  

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const tasks = await fetchTasksApi();
        setTasks(tasks);
      } catch {
        Swal.fire('Error', 'Failed to fetch tasks', 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const addTask = async (title: string, description: string) => {
    try {
      const newTask = await addTaskApi(title, description);
      setTasks([...tasks, newTask]);
      Swal.fire('Success', 'Task added successfully', 'success');
    } catch {
      Swal.fire('Error', 'Failed to add task', 'error');
    }
  };

  const updateTask = async (id: string, updatedTask: Partial<Task>) => {
    try {
      const updated = await updateTaskApi(id, updatedTask);
      setTasks(tasks.map(task => task._id === id ? updated : task));
      Swal.fire('Success', 'Task updated successfully', 'success');
    } catch {
      Swal.fire('Error', 'Failed to update task', 'error');
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await deleteTaskApi(id);
      setTasks(tasks.filter(task => task._id !== id));
      Swal.fire('Success', 'Task deleted successfully', 'success');
    } catch {
      Swal.fire('Error', 'Failed to delete task', 'error');
    }
  };

  return { tasks, addTask, updateTask, deleteTask, loading };
};

export default useTasks;
