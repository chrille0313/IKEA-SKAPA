import AboutSection from '@/components/Sections/AboutSection';
import ContactSection from '@/components/Sections/ContactSection';
import DesignPrinciplesSection from '@/components/Sections/DesignPrinciplesSection';
import Examples from '@/components/Sections/Examples';
import LandingPage from '@/components/LandingPage';
import { Stack } from '@mui/material';

export default function Home() {
  return (
    <Stack gap="5rem">
      <LandingPage />
      <Examples />
      <AboutSection />
      <DesignPrinciplesSection />
      <ContactSection />
    </Stack>
  );
}
