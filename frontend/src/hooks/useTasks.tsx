import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import { fetchTasks as fetchTasksApi, addTask as addTaskApi, updateTask as updateTaskApi, deleteTask as deleteTaskApi } from '../api/tasksApi';
import { Task } from '../types/types';

const useTasks = () => {
  const { t } = useTranslation();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const tasks = await fetchTasksApi();
        setTasks(tasks);
      } catch {
        showAlert('error', t('failedToFetchTasks'));
      } finally {
        setLoading(false);
      }};

      fetchTasks();
    }, [t]);
  
    const showAlert = (icon: 'success' | 'error', title: string) => {
      Swal.fire({
        icon,
        title,
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
        customClass: {
          container: 'swal2-container-custom',
          popup: 'swal2-popup-custom',
        },
      });
    };
  
    const addTask = async (title: string, description: string) => {
      try {
        const newTask = await addTaskApi(title, description);
        setTasks([...tasks, newTask]);
        showAlert('success', t('taskAdded'));
      } catch {
        showAlert('error', t('failedToAddTask'));
      }
    };
  
    const updateTask = async (id: string, title: string, description: string) => {
      try {
        const updated = await updateTaskApi(id, { title, description });
        setTasks(tasks.map(task => task._id === id ? updated : task));
        showAlert('success', t('taskUpdated'));
      } catch {
        showAlert('error', t('failedToUpdateTask'));
      }
    };
  
    const deleteTask = async (id: string) => {
      try {
        await deleteTaskApi(id);
        setTasks(tasks.filter(task => task._id !== id));
        showAlert('success', t('taskDeleted'));
      } catch {
        showAlert('error', t('failedToDeleteTask'));
      }
    };
  
    const updateTaskStatus = async (id: string, completed: boolean) => {
      try {
        const updated = await updateTaskApi(id, { completed });
        setTasks(tasks.map(task => task._id === id ? updated : task));
        showAlert('success', t('taskUpdated'));
      } catch {
        showAlert('error', t('failedToUpdateTask'));
      }
    };
  
    const openAddModal = () => setIsAddModalOpen(true);
    const closeAddModal = () => setIsAddModalOpen(false);
  
    const openEditModal = (task: Task) => {
      setSelectedTask(task);
      setIsEditModalOpen(true);
    };
    const closeEditModal = () => {
      setSelectedTask(null);
      setIsEditModalOpen(false);
    };
  
    return {
      tasks,
      addTask,
      updateTask,
      deleteTask,
      loading,
      isAddModalOpen,
      isEditModalOpen,
      openAddModal,
      closeAddModal,
      openEditModal,
      closeEditModal,
      selectedTask,
      updateTaskStatus,
    };
  };
  
  export default useTasks;