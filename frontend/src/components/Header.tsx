import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Modal, Box, Switch, FormControlLabel, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';


interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
  toggleLanguage: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode, toggleLanguage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {t('taskManager')}
        </Typography>
        <IconButton color="inherit" onClick={handleOpenModal}>
          <Avatar alt="Ezequiel Campos" src="/profilegithub.jpg" />
        </IconButton>
      </Toolbar>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="user-modal-title"
        aria-describedby="user-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}>
          <Typography id="user-modal-title" variant="h6" component="h2">
            {t('profile')}
          </Typography>
          <Avatar
            alt="Ezequiel Campos"
            src="/profilegithub.jpg"
            sx={{ width: 100, height: 100, margin: '20px auto' }}
          />
          <Typography id="user-modal-description" sx={{ mt: 2 }}>
            {t('name')}: Ezequiel Campos<br />
            {t('email')}: humbertoezequiel.z.c@gmail.com
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                color="primary"
              />
            }
            label={darkMode ? t('darkMode') : t('lightMode')}
          />
          <Button onClick={toggleLanguage} color="primary">
            {t('language')}: {i18n.language === 'en' ? 'ES' : 'EN'}
          </Button>
        </Box>
      </Modal>
    </AppBar>
  );
};

export default Header;