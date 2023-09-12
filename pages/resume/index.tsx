import { Box, Stack } from "@mui/material";
import { Nav } from "../../src/components/Nav";
import { NextPage } from "next";

const ResumePage: NextPage = () => {
  return (
    <Stack alignItems="center">
      <Box sx={{ width: "75%", mt: 4 }}>
        <Nav />
      </Box>
    </Stack>
  );
}

export default ResumePage;