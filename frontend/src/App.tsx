import React from 'react';
import { Container, CssBaseline, Typography, Button, Switch, FormControlLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useTasks from './hooks/useTasks';
import TaskList from './components/TaskList';
import TaskModal from './modals/TaskModal';
import TaskModalAddUpdate from './modals/TaskModalAddUpdate';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = React.useState(true);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          primary: {
            main: '#a16be4',
          },
          secondary: {
            main: '#00ffff',
          },
          background: {
            default: darkMode ? '#121212' : '#f5f5f5',
            paper: darkMode ? '#1e1e1e' : '#ffffff',
          },
        },
      }),
    [darkMode],
  );

  const {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    updateTaskStatus,
    loading,
    isAddModalOpen,
    openAddModal,
    closeAddModal,
  } = useTasks();

  const [selectedTask, setSelectedTask] = React.useState<string | null>(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = React.useState(false);

  const handleSubmit = (id: string | undefined, title: string, description: string) => {
    if (id) {
      updateTask(id, title, description);
    } else {
      addTask(title, description);
    }
  };

  const handleOpenTask = (id: string) => {
    setSelectedTask(id);
  };

  const handleCloseTask = () => {
    setSelectedTask(null);
  };

  const handleOpenUpdateModal = () => {
    setIsUpdateModalOpen(true);
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" className="py-8">
        <CssBaseline />
        <div className="flex justify-between items-center mb-8">
          <Typography variant="h4" className="text-primary">
            {t('taskManager')}
          </Typography>
          <div>
            <FormControlLabel
              control={
                <Switch
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                  color="primary"
                />
              }
              label={darkMode ? "Dark" : "Light"}
            />
            <Button onClick={toggleLanguage} color="primary">
              {i18n.language === 'en' ? 'ES' : 'EN'}
            </Button>
          </div>
        </div>
        <Button 
          onClick={openAddModal} 
          variant="contained" 
          color="primary"
          className="mb-6"
        >
          {t('addTask')}
        </Button>
        {loading ? (
          <Typography variant="h6" align="center" color="secondary">{t('loading')}</Typography>
        ) : (
          <TaskList 
            tasks={tasks} 
            onTaskClick={handleOpenTask} 
            onUpdateStatus={updateTaskStatus}
          />
        )}
        {selectedTask && (
          <TaskModal
            task={tasks.find(task => task._id === selectedTask) || null}
            onClose={handleCloseTask}
            onDelete={deleteTask}
            onOpenUpdate={handleOpenUpdateModal}
          />
        )}
        <TaskModalAddUpdate
          isOpen={isAddModalOpen || isUpdateModalOpen}
          onClose={isAddModalOpen ? closeAddModal : handleCloseUpdateModal}
          onSubmit={handleSubmit}
          task={isUpdateModalOpen ? tasks.find(task => task._id === selectedTask) : undefined}
          isEditing={isUpdateModalOpen}
        />
      </Container>
    </ThemeProvider>
  );
};

export default App;