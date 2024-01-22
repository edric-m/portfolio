import { Stack, Typography } from '@mui/material';
// import Image from "next/image"; // Error: Image Optimization using the default loader is not compatible with `{ output: 'export' }`.

const profilePictureUrl: string = 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Portrait_placeholder.png/320px-Portrait_placeholder.png';

const about = 'I am a software engineer with 2 years of experience in full stack web development. My UTS coursework included networking, web security, signal processing and embedded software. I value writing robust, reusable, and extendable code. Always curious and continuously learning about new technologies and workflows that uplift my team and work.';

export const About = () => {
  return (
    <Stack>
      <Typography variant="h6">Hello</Typography>
      <Stack direction="row" spacing={6}>
        <Stack spacing={2}>
          <Typography variant="body1">
            {about}
          </Typography>
        </Stack>
        <img src={profilePictureUrl} alt="profile" height={200} />
      </Stack>
    </Stack>
  ); 
};