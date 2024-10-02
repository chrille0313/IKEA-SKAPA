import { Box, Divider as MUIDivider } from '@mui/material';
import { DividerProps as MUIDividerProps } from '@mui/material';

export interface DividerProps extends MUIDividerProps {
  thickness?: number | string;
  length?: number | string;
}

export default function Divider({ thickness, length, ...props }: DividerProps) {
  return (
    <Box
      sx={
        props.orientation === 'vertical'
          ? length
            ? { height: length }
            : undefined
          : length
            ? { width: length }
            : undefined
      }
    >
      <MUIDivider
        {...props}
        sx={{
          ...(props.orientation === 'vertical' && thickness ? { borderRightWidth: thickness } : {}),
          ...(props.orientation !== 'vertical' && thickness
            ? { borderBottomWidth: thickness }
            : {}),
          ...props.sx
        }}
      />
    </Box>
  );
}
