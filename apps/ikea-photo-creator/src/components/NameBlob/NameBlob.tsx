import { Stack, Typography } from '@mui/material';
import { StackProps } from '@mui/material';

function getNameComponent(name: string) {
  return <Typography variant="body2">{name}</Typography>;
}

type NameBlobProps = StackProps;

export default function NameBlob(props: NameBlobProps) {
  return (
    <Stack textAlign="center" {...props}>
      {getNameComponent('Lukas Hén')}
      {getNameComponent('Emil Andersson')}
      {getNameComponent('Christian Mattsson')}
      {getNameComponent('Leopold Wahlbeck')}
      {getNameComponent('Senja Kortesaari')}
      {getNameComponent('Ida Åberg')}
    </Stack>
  );
}
