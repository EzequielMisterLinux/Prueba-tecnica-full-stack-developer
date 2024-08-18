import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          {new Date().getFullYear()}
          {' Ezequiel Campos. All rights reserved.'}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
          humbertoezequiel.z.c@gmail.com
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Link href="https://github.com/EzequielMisterLinux" color="inherit" sx={{ mx: 1 }}>
            <GitHubIcon />
          </Link>
          <Link href="https://www.instagram.com/alacrysoft/" color="inherit" sx={{ mx: 1 }}>
            <InstagramIcon />
          </Link>
          <Link href="https://www.youtube.com/@LinuxMasterTutoriales" color="inherit" sx={{ mx: 1 }}>
            <YouTubeIcon />
          </Link>
          <Link href="https://www.linkedin.com/in/humberto-ezequiel-zelaya-campos-694941266/" color="inherit" sx={{ mx: 1 }}>
            <LinkedInIcon />
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;