'use client';

import { PropsWithChildren, useRef } from 'react';
import { Box, Fade, FadeProps, Slide, SlideProps } from '@mui/material';
import { useInView, IntersectionOptions } from 'react-intersection-observer';

interface SlideFadeInOnScrollProps extends PropsWithChildren {
  options?: {
    slide?: Omit<SlideProps, 'children'>;
    fade?: Omit<FadeProps, 'children'>;
    inView?: IntersectionOptions;
  };
}

export function SlideFadeInOnScroll({ children, options = {} }: SlideFadeInOnScrollProps) {
  const slideContainerRef = useRef<HTMLElement>(null);
  const [ref, inView] = useInView({ ...options.inView });

  return (
    <Fade in={inView} {...options.fade}>
      <Box ref={slideContainerRef}>
        <Slide in={inView} direction="up" container={slideContainerRef.current} {...options.slide}>
          <Box ref={ref}>{children}</Box>
        </Slide>
      </Box>
    </Fade>
  );
}
