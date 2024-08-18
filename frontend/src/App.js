// En src/App.tsx
import React from 'react';
import { Container, CssBaseline, Typography, Button, Switch, FormControlLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useTasks from './hooks/useTasks';
import TaskList from './components/TaskList';
import TaskModal from './modals/TaskModal';
import TaskModalAddUpdate from './modals/TaskModalAddUpdate';
var App = function () {
    var _a = useTranslation(), t = _a.t, i18n = _a.i18n;
    var _b = React.useState(true), darkMode = _b[0], setDarkMode = _b[1];
    var theme = React.useMemo(function () {
        return createTheme({
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
        });
    }, [darkMode]);
    var _c = useTasks(), tasks = _c.tasks, addTask = _c.addTask, updateTask = _c.updateTask, deleteTask = _c.deleteTask, updateTaskStatus = _c.updateTaskStatus, loading = _c.loading, isAddModalOpen = _c.isAddModalOpen, openAddModal = _c.openAddModal, closeAddModal = _c.closeAddModal;
    var _d = React.useState(null), selectedTask = _d[0], setSelectedTask = _d[1];
    var _e = React.useState(false), isUpdateModalOpen = _e[0], setIsUpdateModalOpen = _e[1];
    var handleSubmit = function (id, title, description) {
        if (id) {
            updateTask(id, title, description);
        }
        else {
            addTask(title, description);
        }
    };
    var handleOpenTask = function (id) {
        setSelectedTask(id);
    };
    var handleCloseTask = function () {
        setSelectedTask(null);
    };
    var handleOpenUpdateModal = function () {
        setIsUpdateModalOpen(true);
    };
    var handleCloseUpdateModal = function () {
        setIsUpdateModalOpen(false);
    };
    var toggleLanguage = function () {
        i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
    };
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(Container, { maxWidth: "md", className: "py-8 m-6" },
            React.createElement(CssBaseline, null),
            React.createElement("div", { className: "flex justify-between items-center mb-8" },
                React.createElement(Typography, { variant: "h4", className: "text-primary" }, t('taskManager')),
                React.createElement(Typography, null, "Consejo: Click a una tarea para ver su contenido"),
                React.createElement("div", null,
                    React.createElement(FormControlLabel, { control: React.createElement(Switch, { checked: darkMode, onChange: function () { return setDarkMode(!darkMode); }, color: "primary" }), label: darkMode ? "Dark" : "Light" }),
                    React.createElement(Button, { onClick: toggleLanguage, color: "primary" }, i18n.language === 'en' ? 'ES' : 'EN'))),
            React.createElement(Button, { onClick: openAddModal, variant: "contained", color: "primary", className: "mb-6" }, t('addTask')),
            loading ? (React.createElement(Typography, { variant: "h6", align: "center", color: "secondary" }, t('loading'))) : (React.createElement(TaskList, { tasks: tasks, onTaskClick: handleOpenTask, onUpdateStatus: updateTaskStatus })),
            selectedTask && (React.createElement(TaskModal, { task: tasks.find(function (task) { return task._id === selectedTask; }) || null, onClose: handleCloseTask, onDelete: deleteTask, onOpenUpdate: handleOpenUpdateModal })),
            React.createElement(TaskModalAddUpdate, { isOpen: isAddModalOpen || isUpdateModalOpen, onClose: isAddModalOpen ? closeAddModal : handleCloseUpdateModal, onSubmit: handleSubmit, task: isUpdateModalOpen ? tasks.find(function (task) { return task._id === selectedTask; }) : undefined, isEditing: isUpdateModalOpen }))));
};
export default App;
