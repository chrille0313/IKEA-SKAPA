import { Box, Container, Typography } from '@mui/material';
import React from 'react';

export default function Footer() {
  return (
    <Box paddingY="2rem">
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography>© All Rights Reserved.</Typography>
        </Box>
      </Container>
    </Box>
  );
}
