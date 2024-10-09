import SectionHeader from '@/components/Sections/SectionHeader';
import { Box, Container, Stack, Typography } from '@mui/material';
import ChalmersLogo from '@/components/Logos/ChalmersLogo';
import members from '@/../public/members.jpg';
import TitleDivider from '@/components/TitleDivider';
import NameBlob from '@/components/NameBlob';
import SectionTitle from '@/components/Sections/SectionTitle';
import { FadeInOnScroll, SlideFadeInOnScroll } from '@/components/Animation';

export default function AboutSection() {
  return (
    <Stack id="about" gap="2rem">
      <SlideFadeInOnScroll>
        <SectionHeader gap="1.5rem" marginBottom="2rem">
          <SectionTitle>About Us</SectionTitle>
        </SectionHeader>
      </SlideFadeInOnScroll>
      <FadeInOnScroll>
        <Box
          width="100%"
          height="350px"
          sx={{
            background: `url(${members.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 10%',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        />
      </FadeInOnScroll>
      <Container>
        <Stack direction="row" gap="5rem" alignItems="center" justifyContent="center">
          <SlideFadeInOnScroll>
            <Box display="flex">
              <ChalmersLogo />
            </Box>
          </SlideFadeInOnScroll>
          <Container maxWidth="sm" style={{ margin: 0, padding: 0 }}>
            <Stack gap="1.5rem" alignItems="center">
              <SlideFadeInOnScroll>
                <Stack direction="row" gap="1.5rem" alignItems="center">
                  <Stack textAlign="center">
                    <SectionTitle>TEK 830</SectionTitle>
                    <Typography variant="h5">Group 19</Typography>
                  </Stack>
                  <TitleDivider orientation="vertical" length="4rem" />
                  <NameBlob />
                </Stack>
              </SlideFadeInOnScroll>
              <SlideFadeInOnScroll>
                <Typography>
                    We are a team from Chalmers University dedicated to simplifying the creation of regional marketing
                    material for retail designers. Our mission is to bridge the gap between artificial intelligence and
                    retail designers with the help of our innovative software, ÅKE Image Gen. This tool saves time,
                    improves efficiency and makes life easier for retail designers by helping users generate tailored
                    commercial images for regional markets with just a few clicks.
                </Typography>
              </SlideFadeInOnScroll>
            </Stack>
          </Container>
        </Stack>
      </Container>
    </Stack>
  );
}
