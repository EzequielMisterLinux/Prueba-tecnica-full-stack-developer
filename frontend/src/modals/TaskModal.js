import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
var TaskModal = function (_a) {
    var task = _a.task, onClose = _a.onClose, onDelete = _a.onDelete, onOpenUpdate = _a.onOpenUpdate;
    var t = useTranslation().t;
    if (!task)
        return null;
    return (React.createElement(Dialog, { open: true, onClose: onClose, fullWidth: true, maxWidth: "md" },
        React.createElement(DialogTitle, null,
            React.createElement(Typography, { variant: "h6", color: "secondary" }, task.title)),
        React.createElement(DialogContent, null,
            React.createElement(Typography, { variant: "body1" }, task.description),
            React.createElement(Typography, { variant: "body2", color: "textSecondary", className: "mt-2" },
                t('status'),
                ": ",
                task.completed ? t('completed') : t('pending'))),
        React.createElement(DialogActions, null,
            React.createElement(Button, { onClick: onOpenUpdate, color: "primary", variant: "contained" }, t('edit')),
            React.createElement(Button, { onClick: function () { return onDelete(task._id); }, color: "error", variant: "contained" }, t('delete')),
            React.createElement(Button, { onClick: onClose, color: "primary" }, t('close')))));
};
export default TaskModal;
