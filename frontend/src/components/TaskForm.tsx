import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface TaskFormProps {
  onSubmit: (title: string, description: string) => void;
  initialTitle: string;
  initialDescription: string;
  isEditing: boolean;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialTitle, initialDescription, isEditing }) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  const handleSubmit = () => {
    onSubmit(title, description);
  };

  return (
    <div className="space-y-4 p-4">
      <TextField
        autoFocus
        margin="dense"
        label="Title"
        fullWidth
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="bg-gray-800 text-white"
      />
      <TextField
        margin="dense"
        label="Description"
        fullWidth
        variant="outlined"
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="bg-gray-800 text-white"
      />
      <Button onClick={handleSubmit} color="primary" className="bg-neonPurple hover:bg-purple-700">
        {isEditing ? 'Update' : 'Add'}
      </Button>
    </div>
  );
};

export default TaskForm;
