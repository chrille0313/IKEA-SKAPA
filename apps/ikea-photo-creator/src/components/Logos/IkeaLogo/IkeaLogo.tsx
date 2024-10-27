import Image from 'next/image';
import logo from '@/../public/static/images/logos/IkeaLogo.png';
import { LogoProps } from '@/components/Logos/types';

export default function IkeaLogo(props: LogoProps) {
  return <Image src={logo} alt="Ikea Logo" {...props} />;
}
