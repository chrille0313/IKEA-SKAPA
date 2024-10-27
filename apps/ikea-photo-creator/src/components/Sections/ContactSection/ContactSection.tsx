import { SlideFadeInOnScroll } from '@/components/Animation';
import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import SectionTitle from '@/components/Sections/SectionTitle';
import SectionHeader from '@/components/Sections/SectionHeader';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';
import mailIcon from '@/../public/static/images/graphics/undraw_mailbox_re_dvds.svg';

export default function ContactSection() {
  return (
    <Container>
      <Stack direction="row" gap="5rem" alignItems="center" justifyContent="center">
        <Box maxWidth="450px" marginTop="5rem">
          <Image src={mailIcon} alt="mail icon" />
        </Box>

        <Stack maxWidth="450px">
          <SlideFadeInOnScroll>
            <SectionHeader>
              <Stack textAlign="center">
                <Typography variant="h5">Want to know more?</Typography>
                <SectionTitle>Let&apos;s get in touch!</SectionTitle>
              </Stack>
            </SectionHeader>
          </SlideFadeInOnScroll>
          <SlideFadeInOnScroll>
            <ContactForm id="contact" />
          </SlideFadeInOnScroll>
        </Stack>
      </Stack>
    </Container>
  );
}
