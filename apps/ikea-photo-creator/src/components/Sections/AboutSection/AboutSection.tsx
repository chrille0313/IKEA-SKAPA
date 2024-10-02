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
        <SectionHeader gap="1.5rem" marginBottom="1rem">
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
        <Stack direction="row" alignItems="center">
          <SlideFadeInOnScroll>
            <Box display="flex">
              <ChalmersLogo />
            </Box>
          </SlideFadeInOnScroll>
          <Container maxWidth="sm">
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, sit. Iusto
                  sint modi iure suscipit ratione veniam cupiditate at deserunt, eligendi iste
                  beatae quam voluptatum. Eos ipsum sunt corrupti, commodi omnis velit temporibus
                  enim ea unde quae ullam dolorum est architecto vitae eius accusamus veritatis esse
                  dicta laborum labore. Voluptatum!
                </Typography>
              </SlideFadeInOnScroll>
            </Stack>
          </Container>
        </Stack>
      </Container>
    </Stack>
  );
}
