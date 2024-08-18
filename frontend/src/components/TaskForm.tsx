import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { FormContainer } from '../styles/FormStyles';
import Swal from 'sweetalert2';

interface TaskFormProps {
  onSubmit: (title: string, description: string) => void;
  initialTitle?: string;
  initialDescription?: string;
  isEditing?: boolean;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialTitle = '', initialDescription = '', isEditing = false }) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [errors, setErrors] = useState({ title: '', description: '' });

  useEffect(() => {
    setTitle(initialTitle);
    setDescription(initialDescription);
  }, [initialTitle, initialDescription]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { title: '', description: '' };

    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (!newErrors.title && !newErrors.description) {
      onSubmit(title, description);
      setTitle('');
      setDescription('');
    } else {
      setErrors(newErrors);
      Swal.fire('Validation Error', 'Please fill out all fields correctly.', 'error');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        error={!!errors.title}
        helperText={errors.title}
      />
      <TextField
        fullWidth
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        multiline
        rows={3}
        error={!!errors.description}
        helperText={errors.description}
      />
      <Button type="submit" variant="contained">
        {isEditing ? 'Update Task' : 'Add Task'}
      </Button>
    </FormContainer>
  );
};

export default TaskForm;
