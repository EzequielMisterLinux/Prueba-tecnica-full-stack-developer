import React, { useState } from 'react'
import tw, { styled } from 'twin.macro'
import { TextField, Button } from '@mui/material'

const FormContainer = styled.form`
  ${tw`space-y-4 mb-8`}
`

interface TaskFormProps {
  onSubmit: (title: string, description: string) => void
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim() && description.trim()) {
      onSubmit(title, description)
      setTitle('')
      setDescription('')
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        css={tw`bg-opacity-20 backdrop-filter backdrop-blur-lg`}
      />
      <TextField
        fullWidth
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        multiline
        rows={3}
        css={tw`bg-opacity-20 backdrop-filter backdrop-blur-lg`}
      />
      <Button type="submit" variant="contained" css={tw`bg-neonPurple hover:bg-purple-700`}>
        Add Task
      </Button>
    </FormContainer>
  )
}

export default TaskForm