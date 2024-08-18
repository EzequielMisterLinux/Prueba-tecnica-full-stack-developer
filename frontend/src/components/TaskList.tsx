import React from 'react';
import { Typography, Card, CardContent, Button } from '@mui/material';
import { Task as TaskType } from '../types/types';
import { useTranslation } from 'react-i18next';

interface TaskListProps {
  tasks: TaskType[];
  onTaskClick: (id: string) => void;
  onUpdateStatus: (id: string, completed: boolean) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskClick, onUpdateStatus }) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <Card
          key={task._id}
          className="cursor-pointer hover:bg-opacity-80 transition duration-200 ease-in-out border border-primary"
        >
          <CardContent className="flex justify-between items-center">
            <div onClick={() => onTaskClick(task._id)}>
              <Typography variant="h6" color="secondary">{task.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                {t('status')}: {task.completed ? t('completed') : t('pending')}
              </Typography>
            </div>
            <Button
              onClick={() => onUpdateStatus(task._id, !task.completed)}
              variant="outlined"
              color="primary"
            >
              {task.completed ? t('markAsPending') : t('markAsCompleted')}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;