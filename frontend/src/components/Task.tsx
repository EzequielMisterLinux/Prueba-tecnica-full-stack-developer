import React from 'react'
import tw, { styled } from 'twin.macro'
import { Card, CardContent, Typography, IconButton } from '@mui/material'
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material'

const TaskCard = styled(Card)`
  ${tw`bg-opacity-20 backdrop-filter backdrop-blur-lg border border-neonPurple`}
  background-color: rgba(176, 38, 255, 0.1);
`

const TaskContent = styled(CardContent)`
  ${tw`flex justify-between items-center`}
`

interface TaskProps {
  id: string
  title: string
  description: string
  completed: boolean
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

const Task: React.FC<TaskProps> = ({ id, title, description, completed, onEdit, onDelete }) => {
  return (
    <TaskCard>
      <TaskContent>
        <div>
          <Typography variant="h6" css={tw`text-neonPurple`}>
            {title}
          </Typography>
          <Typography variant="body2" css={tw`text-gray-300`}>
            {description}
          </Typography>
          <Typography variant="caption" css={tw`text-gray-400`}>
            Status: {completed ? 'Completed' : 'Pending'}
          </Typography>
        </div>
        <div>
          <IconButton onClick={() => onEdit(id)} css={tw`text-neonPurple`}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => onDelete(id)} css={tw`text-red-500`}>
            <DeleteIcon />
          </IconButton>
        </div>
      </TaskContent>
    </TaskCard>
  )
}

export default Task