import React from 'react';
import { Container, CssBaseline, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useTasks from './hooks/useTasks';
import TaskList from './components/TaskList';
import TaskModal from './modals/TaskModal';
import TaskModalAddUpdate from './modals/TaskModalAddUpdate';
import Header from './components/Header';
import Footer from './components/Footer';

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
      <CssBaseline />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} toggleLanguage={toggleLanguage} />
        <Container maxWidth="md" style={{ flexGrow: 1, padding: '2rem 0' }}>
          <Typography variant="h4" gutterBottom>
            {t('taskManager')}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {t('tip')}
          </Typography>
          <Button 
            onClick={openAddModal} 
            variant="contained" 
            color="primary"
            style={{ marginBottom: '1rem' }}
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
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;