import React from 'react';
import { Typography, Card, CardContent, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
var TaskList = function (_a) {
    var tasks = _a.tasks, onTaskClick = _a.onTaskClick, onUpdateStatus = _a.onUpdateStatus;
    var t = useTranslation().t;
    return (React.createElement("div", { className: "space-y-4" }, tasks.map(function (task) { return (React.createElement(Card, { key: task._id, className: "cursor-pointer hover:bg-opacity-80 transition duration-200 ease-in-out border border-primary" },
        React.createElement(CardContent, { className: "flex justify-between items-center " },
            React.createElement("div", { onClick: function () { return onTaskClick(task._id); } },
                React.createElement(Typography, { variant: "h6", color: "secondary" }, task.title),
                React.createElement(Typography, { variant: "body2", color: "textSecondary" },
                    t('status'),
                    ": ",
                    task.completed ? t('completed') : t('pending'))),
            React.createElement(Button, { onClick: function () { return onUpdateStatus(task._id, !task.completed); }, variant: "outlined", color: "primary" }, task.completed ? t('markAsPending') : t('markAsCompleted'))))); })));
};
export default TaskList;
