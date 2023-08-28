import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const Nav = () => {
  return (
    <Stack justifyContent="center" direction="row" spacing={2}>
      <Button href="about">About</Button>
      <Button href="experience">Experience</Button>
      <Button href="projects">Projects</Button>
      <Button href="contact">Contact</Button>
    </Stack>
  );
}