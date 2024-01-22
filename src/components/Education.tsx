import { Stack, Typography } from '@mui/material';

export const Education = () => {
  return (
    <>
      <Stack>
        <Typography variant="h6">Education</Typography>
        <Stack spacing={4}>
          <Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Bachelor of Software Engineering (Honours)</Typography>
              <Typography>Nov 2022</Typography>
            </Stack>
            <Typography>Diploma in Professional Engineering Practice</Typography>
            <Typography>University of Technology Sydney</Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  ); 
};
  