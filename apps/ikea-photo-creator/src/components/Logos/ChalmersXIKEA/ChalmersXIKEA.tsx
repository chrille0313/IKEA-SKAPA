'use client';

import { Stack, StackProps, useTheme } from '@mui/material';
import ChalmersLogo from '@/components/Logos/ChalmersLogo';
import IkeaLogo from '@/components/Logos/IkeaLogo';
import CloseIcon from '@mui/icons-material/Close';

export default function ChalmersXIKEA(props: StackProps) {
  const theme = useTheme();

  return (
    <Stack direction="row" gap="0.75rem" justifyContent="center" alignItems="center" {...props}>
      <ChalmersLogo />
      <CloseIcon color="inherit" sx={{ color: theme.palette.text.primary }} />
      <IkeaLogo />
    </Stack>
  );
}
