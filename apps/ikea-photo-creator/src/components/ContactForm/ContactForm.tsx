'use client';

import SendIcon from '@mui/icons-material/Send';
import { Autocomplete, Box, Button, Stack, StackProps, TextField } from '@mui/material';
import NextLink from 'next/link';
import { useState } from 'react';

const contactInformation = [
  {
    name: 'Christian Mattsson',
    email: 'chrille_0313@hotmail.com'
  },
  {
    name: 'Leopold Wahlbeck',
    email: 'leopoldwahlbeck@gmail.com'
  },
  {
    name: 'Ida Åberg',
    email: 'idaaberg0310@gmail.com'
  },
  {
    name: 'Senja Kortesaari',
    email: 'senjakortesaari@hotmail.com'
  },
  {
    name: 'Lukas Hén',
    email: 'lukas.hen@hotmail.com'
  },
  {
    name: 'Emil Andersson',
    email: ''
  }
];

export default function ContactForm(props: StackProps) {
  const [contact, setContact] = useState(contactInformation);
  const [message, setMessage] = useState('');

  function getMailToLink() {
    return `mailto:${contact.map((contact) => contact.email).join(',')}?body=${message}`;
  }

  return (
    <Stack gap="1rem" {...props}>
      <Autocomplete
        id="contact"
        multiple
        limitTags={1}
        options={contactInformation}
        getOptionLabel={(option) => option.name}
        value={contact}
        defaultValue={contactInformation}
        onChange={(event, newValue) => setContact(newValue)}
        renderInput={(params) => <TextField {...params} label="Contact" />}
        disablePortal
        disableListWrap
        disableCloseOnSelect
        filterSelectedOptions
      />
      <TextField
        id="message"
        label="Message"
        variant="outlined"
        rows={10}
        multiline
        value={message}
        onChange={(e) => setMessage(e.target.value as string)}
      />
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          size="large"
          style={{ borderRadius: 50 }}
          LinkComponent={NextLink}
          endIcon={<SendIcon />}
          href={getMailToLink()}
        >
          Send
        </Button>
      </Box>
    </Stack>
  );
}
