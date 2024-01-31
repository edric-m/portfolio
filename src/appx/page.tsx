'use client';
import { Box, Stack } from '@mui/material';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Nav } from '../components/Nav';
import { Education } from '../components/Education';
import { Leadership } from '../components/Leadership';
import { Teamwork } from '../components/Teamwork';
import { Contact } from '../components/Contact';

export default function Main() {
  return (
    <>
      <Nav />
      <Stack alignItems="center">
        <Box sx={{ width: '75%'}}>
          <Stack spacing={4}>
            <About />
            <Experience />
            <Education />
            <Leadership />
            <Teamwork />
            <Contact />
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
