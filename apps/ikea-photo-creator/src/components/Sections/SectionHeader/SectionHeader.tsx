import { Stack, StackProps } from '@mui/material';
import TitleDivider from '@/components/TitleDivider';

export interface SectionHeaderProps extends StackProps {
  disableMargin?: boolean;
}

export default function SectionHeader({ disableMargin, children, ...props }: SectionHeaderProps) {
  return (
    <Stack gap="2rem" alignItems="center" marginBottom={disableMargin ? 0 : '3rem'} {...props}>
      {children}
      <TitleDivider />
    </Stack>
  );
}
