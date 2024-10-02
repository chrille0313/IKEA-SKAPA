import { Stack, Typography } from '@mui/material';
import FigmaDemo from '@/components/FigmaDemo';
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
      <Stack>
        <SlideFadeInOnScroll>
          <Typography variant="h1" color="primary">
            Hej!
          </Typography>
        </SlideFadeInOnScroll>
      </Stack>
    </Stack>
    // <FigmaDemo />
  );
}
