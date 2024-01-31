import { Box, Stack } from '@mui/material';
import { Contact } from '../../src/components/Contact';
import { Nav } from '../../src/components/Nav';
import { NextPage } from 'next';

const ContactPage: NextPage = () => {
  return (
    <Stack alignItems="center">
      <Nav />
      <Box sx={{ width: '75%', mt: 4 }}>
        <Contact />
      </Box>
    </Stack>
  );
};

export default ContactPage;