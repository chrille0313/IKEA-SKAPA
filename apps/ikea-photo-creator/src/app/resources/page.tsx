import SectionHeader from '@/components/Sections/SectionHeader';
import SectionTitle from '@/components/Sections/SectionTitle';
import { Container, Stack } from '@mui/material';

export default function ResourcesPage() {
  return (
    <Container
      sx={{
        paddingTop: '3rem'
      }}
    >
      <Stack gap="2rem">
        <SectionHeader marginBottom={0}>
          <SectionTitle>Presentation</SectionTitle>
        </SectionHeader>
        <video
          controls
          style={{
            borderRadius: '1rem'
          }}
        >
          <source src="/static/videos/Final_Pitch_slides_19.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <SectionHeader marginBottom={0}>
          <SectionTitle>Slides</SectionTitle>
        </SectionHeader>
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vTpJ6KXw40Cb8MChXVFDdyJddlAMNZdcGt_nq6tfUoy5Bfq8Xv0UTZej604coJPCDjHXTxOcYc_onzC/embed?start=false&loop=false&delayms=5000"
          style={{
            border: 'none',
            borderRadius: '1rem',
            aspectRatio: '16 / 9'
          }}
        />
      </Stack>
    </Container>
  );
}
