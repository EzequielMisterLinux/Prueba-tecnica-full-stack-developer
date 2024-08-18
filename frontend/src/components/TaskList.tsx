import React from 'react';
import Task from './Task';
import { Task as TaskType } from '../types/types';

interface TaskListProps {
  tasks: TaskType[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdateStatus: (id: string, completed: boolean) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete, onUpdateStatus }) => (
  <div>
    {tasks.map((task) => (
      <Task
        key={task._id}
        id={task._id}
        title={task.title}
        description={task.description}
        completed={task.completed}
        onEdit={onEdit}
        onDelete={onDelete}
        onUpdateStatus={onUpdateStatus}
      />
    ))}
  </div>
);

export default TaskList;
