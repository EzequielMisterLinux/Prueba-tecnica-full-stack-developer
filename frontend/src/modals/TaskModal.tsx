import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import TaskForm from '../components/TaskForm';
import { Task as TaskType } from '../types/types';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, description: string) => void;
  task?: Partial<TaskType>;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, onSubmit, task }) => (
  <Dialog open={isOpen} onClose={onClose}>
    <DialogTitle>{task?._id ? 'Edit Task' : 'Add Task'}</DialogTitle>
    <DialogContent>
      <TaskForm
        onSubmit={onSubmit}
        initialTitle={task?.title || ''}
        initialDescription={task?.description || ''}
        isEditing={!!task?._id}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        Cancel
      </Button>
    </DialogActions>
  </Dialog>
);

export default TaskModal;
