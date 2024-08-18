import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import TaskList from './components/TaskList';
import TaskModal from './modals/TaskModal';
import useTasks from './hooks/useTasks';
import { Task as TaskType } from './types/types';
import tw from 'twin.macro';

const AppContainer = tw(Container)`py-8`;

const App: React.FC = () => {
  const { tasks, addTask, updateTask, deleteTask } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState<Partial<TaskType> | null>(null);

  const handleOpenModal = (id?: string) => {
    if (id) {
      const task = tasks.find(task => task._id === id);
      if (task) setCurrentTask(task);
    } else {
      setCurrentTask({ title: '', description: '', completed: false });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentTask(null);
  };

  const handleUpdateTask = async (title: string, description: string) => {
    if (currentTask?._id) {
      await updateTask(currentTask._id, { title, description });
    } else {
      await addTask(title, description);
    }
    handleCloseModal();
  };

  const handleUpdateStatus = async (id: string, completed: boolean) => {
    await updateTask(id, { completed });
  };

  return (
    <AppContainer maxWidth="md">
      <Typography variant="h3" css={tw`text-neonPurple mb-8 text-center`}>
        Task Manager
      </Typography>
      <Button onClick={() => handleOpenModal()} variant="contained" css={tw`bg-neonPurple hover:bg-purple-700`}>
        Add Task
      </Button>
      <TaskList tasks={tasks} onEdit={handleOpenModal} onDelete={deleteTask} onUpdateStatus={handleUpdateStatus} />
      <TaskModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleUpdateTask} task={currentTask || undefined} />
    </AppContainer>
  );
};

export default App;
