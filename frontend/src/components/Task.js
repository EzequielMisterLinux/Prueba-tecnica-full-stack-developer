import React, { useState } from 'react';
import { IconButton, Typography, Collapse, CardActions } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from '@mui/icons-material';
import { TaskCard, TaskContent } from '../styles/TaskStyles';
var Task = function (_a) {
    var id = _a.id, title = _a.title, description = _a.description, completed = _a.completed, onEdit = _a.onEdit, onDelete = _a.onDelete, onUpdateStatus = _a.onUpdateStatus;
    var _b = useState(false), expanded = _b[0], setExpanded = _b[1];
    return (React.createElement(TaskCard, null,
        React.createElement(TaskContent, null,
            React.createElement("div", null,
                React.createElement(Typography, { variant: "h6" }, title),
                React.createElement(Typography, { variant: "body2" }, description),
                React.createElement(Typography, { variant: "caption" },
                    "Status: ",
                    completed ? 'Completed' : 'Pending')),
            React.createElement(CardActions, null,
                React.createElement(IconButton, { onClick: function () { return setExpanded(!expanded); } }, expanded ? React.createElement(ExpandLessIcon, null) : React.createElement(ExpandMoreIcon, null)))),
        React.createElement(Collapse, { in: expanded },
            React.createElement(CardActions, null,
                React.createElement(IconButton, { onClick: function () { return onEdit(id); } },
                    React.createElement(EditIcon, null)),
                React.createElement(IconButton, { onClick: function () { return onUpdateStatus(id, !completed); } }, completed ? 'Mark as Pending' : 'Mark as Completed'),
                React.createElement(IconButton, { onClick: function () { return onDelete(id); } },
                    React.createElement(DeleteIcon, null))))));
};
export default Task;
