import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { Task as TaskType } from '../types/types';
import { useTranslation } from 'react-i18next';

interface TaskModalAddUpdateProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (id: string | undefined, title: string, description: string) => void;
  task?: TaskType;
  isEditing: boolean;
}

const TaskModalAddUpdate: React.FC<TaskModalAddUpdateProps> = ({ isOpen, onClose, onSubmit, task, isEditing }) => {
  const { t } = useTranslation();
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  useEffect(() => {
    if (isEditing && task) {
      setTitle(task.title);
      setDescription(task.description);
    } else {
      setTitle('');
      setDescription('');
    }
    setTitleError('');
    setDescriptionError('');
  }, [isEditing, task]);

  const validateForm = () => {
    let isValid = true;
    if (!title.trim()) {
      setTitleError(t('titleRequired'));
      isValid = false;
    } else {
      setTitleError('');
    }
    if (!description.trim()) {
      setDescriptionError(t('descriptionRequired'));
      isValid = false;
    } else {
      setDescriptionError('');
    }
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit(task?._id, title, description);
      if (!isEditing) {
        setTitle('');
        setDescription('');
      }
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{isEditing ? t('edit') : t('addTask')}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label={t('title')}
          fullWidth
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          error={!!titleError}
          helperText={titleError}
          className="mb-4"
        />
        <TextField
          margin="dense"
          label={t('description')}
          fullWidth
          variant="outlined"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          error={!!descriptionError}
          helperText={descriptionError}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          {t('cancel')}
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          {isEditing ? t('update') : t('addTask')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskModalAddUpdate;