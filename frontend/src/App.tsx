import React from 'react'
import tw, { styled } from 'twin.macro'
import { Container, Typography } from '@mui/material'
import Task from './components/Task'
import TaskForm from './components/TaskForm'
import useTasks from './hooks/useTasks'

const AppContainer = styled(Container)`
  ${tw`py-8`}
`

const TaskList = styled.div`
  ${tw`space-y-4`}
`

const App: React.FC = () => {
  const { tasks, addTask, updateTask, deleteTask } = useTasks()

  return (
    <AppContainer maxWidth="md">
      <Typography variant="h3" css={tw`text-neonPurple mb-8 text-center`}>
        Task Manager
      </Typography>
      <TaskForm onSubmit={addTask} />
      <TaskList>
        {tasks.map((task) => (
          <Task
            key={task._id}
            id={task._id}
            title={task.title}
            description={task.description}
            completed={task.completed}
            onEdit={(id) => updateTask(id, { completed: !task.completed })}
            onDelete={deleteTask}
          />
        ))}
      </TaskList>
    </AppContainer>
  )
}

export default App