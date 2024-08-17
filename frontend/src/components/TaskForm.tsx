import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import { TextField, Button } from '@mui/material';
import Swal from 'sweetalert2';

const FormContainer = styled.form`
  ${tw`space-y-4 mb-8`}
`;

interface TaskFormProps {
  onSubmit: (title: string, description: string) => void;
  initialTitle?: string;
  initialDescription?: string;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialTitle = '', initialDescription = '' }) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [errors, setErrors] = useState({ title: '', description: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { title: '', description: '' };

    if (!title.trim()) {
      newErrors.title = 'Title is required';
      valid = false;
    }

    if (!description.trim()) {
      newErrors.description = 'Description is required';
      valid = false;
    }

    if (valid) {
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
        css={tw`bg-opacity-20 backdrop-filter backdrop-blur-lg`}
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
        css={tw`bg-opacity-20 backdrop-filter backdrop-blur-lg`}
        error={!!errors.description}
        helperText={errors.description}
      />
      <Button type="submit" variant="contained" css={tw`bg-neonPurple hover:bg-purple-700`}>
        Add Task
      </Button>
    </FormContainer>
  );
};

export default TaskForm;
