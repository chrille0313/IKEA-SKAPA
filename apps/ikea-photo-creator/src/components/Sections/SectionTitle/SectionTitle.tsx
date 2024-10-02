import { Typography, TypographyProps } from '@mui/material';

export default function SectionTitle({ children, ...props }: TypographyProps) {
  return (
    <Typography variant="h3" fontWeight="bold" textAlign="center" {...props}>
      {children}
    </Typography>
  );
}
