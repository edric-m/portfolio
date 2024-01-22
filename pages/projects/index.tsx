import { Box, Stack } from '@mui/material';
import { Nav } from '../../src/components/Nav';
import { NextPage } from 'next';
import { Projects } from '@/components/Projects';

const ProjectsPage: NextPage = () => {
  return (
    <Stack alignItems="center">
      <Nav />
      <Box sx={{ width: '75%', mt: 4 }}>
        <Projects />
      </Box>
    </Stack>
  );
};
  
export default ProjectsPage;