import { ImageProps } from 'next/image';

export type LogoProps = Omit<ImageProps, 'src' | 'alt'>;
