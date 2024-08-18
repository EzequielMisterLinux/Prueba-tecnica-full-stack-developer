import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
var TaskForm = function (_a) {
    var onSubmit = _a.onSubmit, initialTitle = _a.initialTitle, initialDescription = _a.initialDescription, isEditing = _a.isEditing;
    var _b = useState(initialTitle), title = _b[0], setTitle = _b[1];
    var _c = useState(initialDescription), description = _c[0], setDescription = _c[1];
    var handleSubmit = function () {
        onSubmit(title, description);
    };
    return (React.createElement("div", { className: "space-y-4 p-4" },
        React.createElement(TextField, { autoFocus: true, margin: "dense", label: "Title", fullWidth: true, variant: "outlined", value: title, onChange: function (e) { return setTitle(e.target.value); }, className: "bg-gray-800 text-white" }),
        React.createElement(TextField, { margin: "dense", label: "Description", fullWidth: true, variant: "outlined", multiline: true, rows: 4, value: description, onChange: function (e) { return setDescription(e.target.value); }, className: "bg-gray-800 text-white" }),
        React.createElement(Button, { onClick: handleSubmit, color: "primary", className: "bg-neonPurple hover:bg-purple-700" }, isEditing ? 'Update' : 'Add')));
};
export default TaskForm;
