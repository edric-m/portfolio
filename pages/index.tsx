import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Experience } from '@/components/Experience';
import { Nav } from '@/components/Nav';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <>
      <Stack alignItems="center">
        <Nav />
        <Box sx={{ width: '75%', mt: 4 }}>
          <Stack spacing={4}>
            <About />
            <Experience />
            {/* <Education /> */}
            {/* <Leadership /> */}
            {/* <Teamwork /> */}
            <Contact />
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default HomePage;
