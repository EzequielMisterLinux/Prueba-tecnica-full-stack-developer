import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import { Container, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import Task from './components/Task';
import TaskForm from './components/TaskForm';
import useTasks from './hooks/useTasks';
import { Task as TaskType } from './types';

const AppContainer = styled(Container)`
  ${tw`py-8`}
`;

const TaskList = styled.div`
  ${tw`space-y-4`}
`;

const App: React.FC = () => {
  const { tasks, addTask, updateTask, deleteTask } = useTasks(); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState<Partial<TaskType> | null>(null);

  const handleOpenModal = (task?: Partial<TaskType>) => {
    setCurrentTask(task || { title: '', description: '', completed: false });
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

  return (
    <AppContainer maxWidth="md">
      <Typography variant="h3" css={tw`text-neonPurple mb-8 text-center`}>
        Task Manager
      </Typography>
      <Button onClick={() => handleOpenModal()} variant="contained" css={tw`bg-neonPurple hover:bg-purple-700`}>
        Add Task
      </Button>
      <TaskList>
        {tasks.map((task) => (
          <Task
            key={task._id}
            id={task._id}
            title={task.title}
            description={task.description}
            completed={task.completed}
            onEdit={(id) => handleOpenModal(tasks.find(task => task._id === id))}
            onUpdateStatus={async (id, completed) => await updateTask(id, { completed })}
            onDelete={deleteTask}
          />
        ))}
      </TaskList>

      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>{currentTask?._id ? 'Edit Task' : 'Add Task'}</DialogTitle>
        <DialogContent>
          <TaskForm
            onSubmit={handleUpdateTask}
            initialTitle={currentTask?.title || ''}
            initialDescription={currentTask?.description || ''}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </AppContainer>
  );
};

export default App;
