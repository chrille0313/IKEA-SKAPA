import { Stack, Typography } from '@mui/material';
import { SlideFadeInOnScroll } from '../Animation';

export default function LandingPage() {
  return (
    <Stack
      component="main"
      justifyContent="center"
      alignItems="center"
      gap="2rem"
      height="90vh"
      bgcolor="#F3DC09"
    >
      <Stack textAlign="center">
        <SlideFadeInOnScroll>
          <Typography variant="h1" color="primary" fontWeight="bold">
            SKAPA
          </Typography>
          <Typography variant="h4" color="primary">
            The future of retail design
          </Typography>
        </SlideFadeInOnScroll>
      </Stack>
    </Stack>
    // <FigmaDemo />
  );
}
