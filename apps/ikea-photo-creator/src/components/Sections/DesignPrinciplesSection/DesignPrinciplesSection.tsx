'use client';

import { Container, Stack, Typography, Divider as AS, useTheme } from '@mui/material';
import BalanceIcon from '@mui/icons-material/Balance';
import PaidIcon from '@mui/icons-material/Paid';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SectionHeader from '@/components/Sections/SectionHeader';
import SectionTitle from '@/components/Sections/SectionTitle';
import { SlideFadeInOnScroll } from '@/components/Animation';

interface ASSProps {
  icon: any;
  header: string;
  text: string;
}

function ASS({ icon, header, text }: ASSProps) {
  const theme = useTheme();

  return (
    <Stack gap="1rem" alignItems="center" flex="1">
      <Stack alignItems="center" gap=".5rem">
        <Typography variant="h3" lineHeight={0}>
          {icon}
        </Typography>
        <Typography variant="h5" fontWeight="bold">
          {header}
        </Typography>
      </Stack>
      <Typography variant="body1">{text}</Typography>
    </Stack>
  );
}

export default function DesignPrinciplesSection() {
  const sections = [
    {
      icon: <BalanceIcon fontSize="inherit" />,
      header: 'Feasibility',
      text: 'Our software has, with technical practicality in mind, been designed to be fully scalable. We have worked towards a product that will integrate with IKEAs digital ecosystem seamlessly. By using API technology, we have enabled the oppurtunity to easily develop a prototype without actually making our own Artificial Intelligence.'
    },
    {
      icon: <HandshakeIcon fontSize="inherit" />,
      header: 'Usability',
      text: 'From the outset, usability has been a top priority. We recognize the importance of providing an intuitive and streamlined experience for internal users. Our software is designed with a user-centric approach, ensuring a comfortable and familiar environment for employees. Whether for online marketing or customer engagement, the interface simplifies image generation, making it effortless and efficient.'
    },
    {
      icon: <PaidIcon fontSize="inherit" />,
      header: 'Viability',
      text: 'In the long-term our solution is built to satisfy. We have made strategic decisions that fits the IKEA business goals in order to support future growth within the company, as well as making the solution adaptable to evolving market needs. Our solution ensures relevance in an ever-changing environment.'
    }
  ];

  return (
    <Container maxWidth="xl" fixed>
      <Stack justifyContent="center" alignItems="center">
        <SlideFadeInOnScroll>
          <SectionHeader>
            <SectionTitle>
              Empowering Your Vision <br /> Through Intelligent Design
            </SectionTitle>
          </SectionHeader>
        </SlideFadeInOnScroll>

        <Stack direction="row" gap="3rem" textAlign="center">
          {sections.map((s, index) => (
            <SlideFadeInOnScroll
              key={s.header}
              options={{
                fade: { timeout: { enter: 500 + index * 375 } },
                slide: { timeout: { enter: 500 + index * 375 } }
              }}
            >
              <ASS {...s} />
            </SlideFadeInOnScroll>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
