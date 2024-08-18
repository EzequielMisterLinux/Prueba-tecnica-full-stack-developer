import React from 'react';
import { IconButton, Typography } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { TaskCard, TaskContent } from '../styles/TaskStyles';

interface TaskProps {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdateStatus: (id: string, completed: boolean) => void;
}

const Task: React.FC<TaskProps> = ({ id, title, description, completed, onEdit, onDelete, onUpdateStatus }) => (
  <TaskCard>
    <TaskContent>
      <div>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
        <Typography variant="caption">Status: {completed ? 'Completed' : 'Pending'}</Typography>
      </div>
      <div>
        <IconButton onClick={() => onEdit(id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onUpdateStatus(id, !completed)}>
          {completed ? 'Mark as Pending' : 'Mark as Completed'}
        </IconButton>
        <IconButton onClick={() => onDelete(id)}>
          <DeleteIcon />
        </IconButton>
      </div>
    </TaskContent>
  </TaskCard>
);

export default Task;
