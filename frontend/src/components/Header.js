import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Modal, Box, Switch, FormControlLabel, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
var Header = function (_a) {
    var darkMode = _a.darkMode, setDarkMode = _a.setDarkMode, toggleLanguage = _a.toggleLanguage;
    var _b = useState(false), isModalOpen = _b[0], setIsModalOpen = _b[1];
    var _c = useTranslation(), t = _c.t, i18n = _c.i18n;
    var handleOpenModal = function () { return setIsModalOpen(true); };
    var handleCloseModal = function () { return setIsModalOpen(false); };
    return (React.createElement(AppBar, { position: "static" },
        React.createElement(Toolbar, null,
            React.createElement(Typography, { variant: "h6", component: "div", sx: { flexGrow: 1 } }, t('taskManager')),
            React.createElement(IconButton, { color: "inherit", onClick: handleOpenModal },
                React.createElement(Avatar, { alt: "Ezequiel Campos", src: "/profilegithub.jpg" }))),
        React.createElement(Modal, { open: isModalOpen, onClose: handleCloseModal, "aria-labelledby": "user-modal-title", "aria-describedby": "user-modal-description" },
            React.createElement(Box, { sx: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                } },
                React.createElement(Typography, { id: "user-modal-title", variant: "h6", component: "h2" }, t('profile')),
                React.createElement(Avatar, { alt: "Ezequiel Campos", src: "/profilegithub.jpg", sx: { width: 100, height: 100, margin: '20px auto' } }),
                React.createElement(Typography, { id: "user-modal-description", sx: { mt: 2 } },
                    t('name'),
                    ": Ezequiel Campos",
                    React.createElement("br", null),
                    t('email'),
                    ": humbertoezequiel.z.c@gmail.com"),
                React.createElement(FormControlLabel, { control: React.createElement(Switch, { checked: darkMode, onChange: function () { return setDarkMode(!darkMode); }, color: "primary" }), label: darkMode ? t('darkMode') : t('lightMode') }),
                React.createElement(Button, { onClick: toggleLanguage, color: "primary" },
                    t('language'),
                    ": ",
                    i18n.language === 'en' ? 'ES' : 'EN')))));
};
export default Header;
