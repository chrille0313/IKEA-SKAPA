'use client';

import { PropsWithChildren } from 'react';
import { Box, Fade, FadeProps } from '@mui/material';
import { useInView, IntersectionOptions } from 'react-intersection-observer';

interface FadeInOnScrollProps extends PropsWithChildren {
  options?: {
    fade?: Omit<FadeProps, 'children'>;
    inView?: IntersectionOptions;
  };
}

export function FadeInOnScroll({ children, options = {} }: FadeInOnScrollProps) {
  const [ref, inView] = useInView({ ...options.inView });

  return (
    <Fade in={inView} {...options.fade}>
      <Box ref={ref}>{children}</Box>
    </Fade>
  );
}
