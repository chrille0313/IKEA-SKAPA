'use client'; // FIXME: Shouldn't need?

import React, { useState } from 'react';
import NextLink from 'next/link';
import {
  AppBar,
  Stack,
  Toolbar,
  useTheme,
  Link,
  Typography,
  TypographyProps,
  Button,
  Divider,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import ChalmersXIKEA from '@/components/Logos/ChalmersXIKEA';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';

interface NavItemProps extends TypographyProps {
  href: string;
}

function NavItem({ children, ...props }: NavItemProps) {
  return (
    <Link href={props.href} component={NextLink}>
      <Typography fontWeight="bold" {...props}>
        {children}
      </Typography>
    </Link>
  );
}

export default function Navbar() {
  const theme = useTheme();
  const drawerWidth = 250;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const drawer = (
    <Stack onClick={handleDrawerToggle}>
      <Toolbar />

      <List>
        <ListItemButton href="/" LinkComponent={NextLink}>
          <ChalmersXIKEA height={100} />
        </ListItemButton>
        <Divider />
        <ListItemButton href="/" LinkComponent={NextLink}>
          <ListItemText
            primary="Home"
            primaryTypographyProps={{
              color: 'primary',
              fontWeight: 'bold'
            }}
          />
        </ListItemButton>
        <ListItemButton href="/resources" LinkComponent={NextLink}>
          <ListItemText
            primary="Resources"
            primaryTypographyProps={{
              color: 'primary',
              fontWeight: 'bold'
            }}
          />
        </ListItemButton>
        <ListItemButton href="/#about" LinkComponent={NextLink}>
          <ListItemText
            primary="About"
            primaryTypographyProps={{
              color: 'primary',
              fontWeight: 'bold'
            }}
          />
        </ListItemButton>
        <ListItemButton href="/#contact" LinkComponent={NextLink}>
          <ListItemText
            primary="Get in touch!"
            primaryTypographyProps={{
              color: 'primary',
              fontWeight: 'bold'
            }}
          />
        </ListItemButton>
        <Divider />
        <ListItemButton
          href="https://github.com/chrille0313/IKEA-SKAPA"
          target="_blank"
          LinkComponent={NextLink}
        >
          <ListItemIcon>
            <GitHubIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="Read More"
            primaryTypographyProps={{
              color: 'primary',
              fontWeight: 'bold'
            }}
          />
        </ListItemButton>
      </List>
    </Stack>
  );

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          height: { md: '10%' },
          bgcolor: theme.palette.background.paper,
          justifyContent: 'center'
        }}
      >
        <Toolbar disableGutters sx={{ paddingX: '3rem', justifyContent: 'space-between' }}>
          <IconButton
            onClick={handleDrawerToggle}
            color="primary"
            edge="start"
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            display={{ xs: 'none', md: 'flex' }}
            height="100%"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" alignItems="center" gap="3rem" height="100%">
              <Link component={NextLink} href="/" height="100%" paddingY="0.5rem">
                <ChalmersXIKEA height="100%" />
              </Link>
              <Stack direction="row" gap="1.5rem" fontWeight="bold">
                <NavItem href="/">Home</NavItem>
                <NavItem href="/resources">Resources</NavItem>
                <NavItem href="/#about">About</NavItem>
                <NavItem href="/#contact">Contact</NavItem>
              </Stack>
            </Stack>
            <Stack direction="row" gap="1rem">
              {/* <Button
              href="/demo"
              size="large"
              variant="contained"
              style={{ borderRadius: 50 }}
              endIcon={<PlayArrowIcon />}
              LinkComponent={NextLink}
            >
              Demo
            </Button> */}
              <Button
                href="https://github.com/chrille0313/IKEA-SKAPA"
                target="_blank"
                size="large"
                variant="contained"
                style={{ borderRadius: 50 }}
                endIcon={<GitHubIcon />}
                LinkComponent={NextLink}
              >
                Read More
              </Button>
              <Button
                href="#contact"
                size="large"
                variant="outlined"
                style={{ borderRadius: 50 }}
                LinkComponent={NextLink}
              >
                Get in touch!
              </Button>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'flex', md: 'none' },
            '& .MuiDrawer-paper': { width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {/* Add spacing for navbar so page content doesn't appear underneath */}
      <Toolbar sx={{ height: { md: '10%' } }} />
    </>
  );
}
