'use client';

import { useTheme } from '@mui/material';
import Divider, { DividerProps } from '@/components/Divider';

export default function TitleDivider(props: DividerProps) {
  const theme = useTheme();

  return (
    <Divider
      length="5rem"
      thickness="0.25rem"
      {...props}
      sx={{ borderColor: theme.palette.primary.main, ...props.sx }}
    />
  );
}
