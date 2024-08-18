import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button } from '@mui/material';
import { Task as TaskType } from '../types/types';
import { useTranslation } from 'react-i18next';

interface TaskModalProps {
  task: TaskType | null;
  onClose: () => void;
  onDelete: (id: string) => void;
  onOpenUpdate: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ task, onClose, onDelete, onOpenUpdate }) => {
  const { t } = useTranslation();

  if (!task) return null;

  return (
    <Dialog open onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        <Typography variant="h6" color="secondary">{task.title}</Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1">{task.description}</Typography>
        <Typography variant="body2" color="textSecondary" className="mt-2">
          {t('status')}: {task.completed ? t('completed') : t('pending')}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onOpenUpdate} color="primary" variant="contained">
          {t('edit')}
        </Button>
        <Button onClick={() => onDelete(task._id)} color="error" variant="contained">
          {t('delete')}
        </Button>
        <Button onClick={onClose} color="primary">
          {t('close')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskModal;