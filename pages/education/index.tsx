import { Box, Stack } from '@mui/material';
import { Nav } from '../../src/components/Nav';
import { Education } from '../../src/components/Education';
import { NextPage } from 'next';

const EducationPage: NextPage = () => {
  return (
    <Stack alignItems="center">
      <Nav />
      <Box sx={{ width: '75%', mt: 4 }}>
        <Education />
      </Box>
    </Stack>
  );
};

export default EducationPage;
