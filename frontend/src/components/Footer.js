import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
var Footer = function () {
    return (React.createElement(Box, { component: "footer", sx: { bgcolor: 'background.paper', py: 6 } },
        React.createElement(Container, { maxWidth: "lg" },
            React.createElement(Typography, { variant: "body2", color: "text.secondary", align: "center" },
                'Copyright © ',
                new Date().getFullYear(),
                ' Ezequiel Campos. All rights reserved.'),
            React.createElement(Typography, { variant: "body2", color: "text.secondary", align: "center", sx: { mt: 1 } }, "humbertoezequiel.z.c@gmail.com"),
            React.createElement(Box, { sx: { display: 'flex', justifyContent: 'center', mt: 2 } },
                React.createElement(Link, { href: "https://github.com/EzequielMisterLinux", color: "inherit", sx: { mx: 1 } },
                    React.createElement(GitHubIcon, null)),
                React.createElement(Link, { href: "https://www.instagram.com/alacrysoft/", color: "inherit", sx: { mx: 1 } },
                    React.createElement(InstagramIcon, null)),
                React.createElement(Link, { href: "https://www.youtube.com/@LinuxMasterTutoriales", color: "inherit", sx: { mx: 1 } },
                    React.createElement(YouTubeIcon, null)),
                React.createElement(Link, { href: "https://www.linkedin.com/in/humberto-ezequiel-zelaya-campos-694941266/", color: "inherit", sx: { mx: 1 } },
                    React.createElement(LinkedInIcon, null))))));
};
export default Footer;
