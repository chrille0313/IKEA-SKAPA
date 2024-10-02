import AboutSection from '@/components/Sections/AboutSection';
import ContactSection from '@/components/Sections/ContactSection';
import DesignPrinciplesSection from '@/components/Sections/DesignPrinciplesSection';
import LandingPage from '@/components/LandingPage';
import { Stack } from '@mui/material';

export default function Home() {
  return (
    <Stack gap="5rem">
      <LandingPage />
      <AboutSection />
      <DesignPrinciplesSection />
      <ContactSection />
    </Stack>
  );
}
