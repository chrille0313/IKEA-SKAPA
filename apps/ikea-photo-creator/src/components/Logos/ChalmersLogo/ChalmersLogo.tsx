import Image from 'next/image';
import logo from '@/../public/static/images/logos/ChalmersLogoTransparent.png';
import { LogoProps } from '@/components/Logos/types';

export default function ChalmersLogo(props: LogoProps) {
  return <Image src={logo} alt="Chalmers Logo" {...props} />;
}
