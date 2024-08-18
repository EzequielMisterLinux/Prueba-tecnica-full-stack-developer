import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
var TaskModalAddUpdate = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, onSubmit = _a.onSubmit, task = _a.task, isEditing = _a.isEditing;
    var t = useTranslation().t;
    var _b = useState((task === null || task === void 0 ? void 0 : task.title) || ''), title = _b[0], setTitle = _b[1];
    var _c = useState((task === null || task === void 0 ? void 0 : task.description) || ''), description = _c[0], setDescription = _c[1];
    var _d = useState(''), titleError = _d[0], setTitleError = _d[1];
    var _e = useState(''), descriptionError = _e[0], setDescriptionError = _e[1];
    useEffect(function () {
        if (isEditing && task) {
            setTitle(task.title);
            setDescription(task.description);
        }
        else {
            setTitle('');
            setDescription('');
        }
        setTitleError('');
        setDescriptionError('');
    }, [isEditing, task]);
    var validateForm = function () {
        var isValid = true;
        if (!title.trim()) {
            setTitleError(t('titleRequired'));
            isValid = false;
        }
        else {
            setTitleError('');
        }
        if (!description.trim()) {
            setDescriptionError(t('descriptionRequired'));
            isValid = false;
        }
        else {
            setDescriptionError('');
        }
        return isValid;
    };
    var handleSubmit = function () {
        if (validateForm()) {
            onSubmit(task === null || task === void 0 ? void 0 : task._id, title, description);
            if (!isEditing) {
                setTitle('');
                setDescription('');
            }
        }
    };
    return (React.createElement(Dialog, { open: isOpen, onClose: onClose, fullWidth: true, maxWidth: "sm" },
        React.createElement(DialogTitle, null, isEditing ? t('edit') : t('addTask')),
        React.createElement(DialogContent, null,
            React.createElement(TextField, { autoFocus: true, margin: "dense", label: t('title'), fullWidth: true, variant: "outlined", value: title, onChange: function (e) { return setTitle(e.target.value); }, error: !!titleError, helperText: titleError, className: "mb-4" }),
            React.createElement(TextField, { margin: "dense", label: t('description'), fullWidth: true, variant: "outlined", multiline: true, rows: 4, value: description, onChange: function (e) { return setDescription(e.target.value); }, error: !!descriptionError, helperText: descriptionError })),
        React.createElement(DialogActions, null,
            React.createElement(Button, { onClick: onClose, color: "primary" }, t('cancel')),
            React.createElement(Button, { onClick: handleSubmit, color: "primary", variant: "contained" }, isEditing ? t('update') : t('addTask')))));
};
export default TaskModalAddUpdate;
