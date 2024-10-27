'use client';

import { Container, Stack, Typography } from '@mui/material';
import SectionHeader from '@/components/Sections/SectionHeader';
import SectionTitle from '@/components/Sections/SectionTitle';
import Carousel from 'react-material-ui-carousel';
import { SlideFadeInOnScroll } from '@/components/Animation';

import Image from 'next/image';
import example1 from '@/../public/static/images/Examples/example1.png';
import example2 from '@/../public/static/images/Examples/example2.png';
import example3 from '@/../public/static/images/Examples/example3.png';
import example4 from '@/../public/static/images/Examples/example4.png';

export default function Examples() {
  return (
    <Container maxWidth="xl">
      <Stack direction="row" alignItems="center">
        <Stack maxWidth="sm">
          <SlideFadeInOnScroll>
            <SectionHeader gap="1.5rem" marginBottom="2rem">
              <SectionTitle>Beautiful images instantly!</SectionTitle>
            </SectionHeader>
            <Typography>
              Effortlessly design stunning visuals that showcase IKEA products in perfectly tailored
              settings. SKAPA&apos;s AI-powered backgrounds make it simple to customize scenes that
              bring out the best in each piece. Explore the possibilities and watch your vision come
              to life!
            </Typography>
          </SlideFadeInOnScroll>
        </Stack>
        <Container maxWidth="sm">
          <Carousel sx={{ flex: 1 }} animation="slide">
            <Image src={example1} alt="" />
            <Image src={example2} alt="" />
            <Image src={example3} alt="" />
            <Image src={example4} alt="" />
          </Carousel>
        </Container>
      </Stack>
    </Container>
  );
}
