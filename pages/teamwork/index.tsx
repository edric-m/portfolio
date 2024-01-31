import { Box, Stack } from '@mui/material';
import { NextPage } from 'next';
import { Nav } from '@/components/Nav';
import { Teamwork } from '@/components/Teamwork';

const TeamworkPage: NextPage = () => {
  return (
    <Stack alignItems="center">
      <Nav />
      <Box sx={{ width: '75%', mt: 4 }}>
        <Teamwork />
      </Box>
    </Stack>
  );
};

export default TeamworkPage;
