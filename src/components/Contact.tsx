import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

export const Contact = () => {
  return (
    <>
      <Stack>
        <Typography variant="h6">Contact</Typography>
        <Typography variant="body1">+61 412 478 324</Typography>
        <Typography variant="body1">
          <a href="mailto:edjomendoza@gmail.com">
          edjomendoza@gmail.com
          </a>
        </Typography>
        <Typography variant="body1">
          <a href="https://github.com/edric-m">github.com/edric-m</a>
        </Typography>
        <Typography variant="body1">
          <a href="http://www.linkedin.com/in/edric-mendoza-67818193">LinkedIn</a>
        </Typography>
      </Stack>
    </>
  ); 
};