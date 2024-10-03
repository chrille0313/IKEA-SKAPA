'use client'; // FIXME: Shouldn't need?

import React from 'react';
import NextLink from 'next/link';
import {
  AppBar,
  Stack,
  Toolbar,
  useTheme,
  Link,
  Typography,
  TypographyProps,
  Button
} from '@mui/material';
import ChalmersXIKEA from '@/components/Logos/ChalmersXIKEA';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

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

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          height: '10%',
          bgcolor: theme.palette.background.paper,
          justifyContent: 'center'
        }}
      >
        <Toolbar disableGutters sx={{ paddingX: '3rem', justifyContent: 'space-between' }}>
          <Stack direction="row" alignItems="center" gap="3rem" height="100%">
            <Link component={NextLink} href="/" height="100%" paddingY="0.5rem">
              <ChalmersXIKEA height="100%" />
            </Link>
            <Stack direction="row" gap="1.5rem" fontWeight="bold">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/#about">About</NavItem>
              <NavItem href="/#contact">Contact</NavItem>
            </Stack>
          </Stack>
          <Stack direction="row" gap="1rem">
            <Button
              href="/demo"
              size="large"
              variant="contained"
              style={{ borderRadius: 50 }}
              endIcon={<PlayArrowIcon />}
              LinkComponent={NextLink}
            >
              Demo
            </Button>
            <Button href="#contact" size="large" variant="outlined" style={{ borderRadius: 50 }}>
              Get in touch!
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      {/* Add spacing for navbar so page content doesn't appear underneath */}
      <Toolbar sx={{ height: '10%' }} />
    </>
  );
}
