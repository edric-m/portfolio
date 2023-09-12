import { Box, Stack } from "@mui/material";
import { Nav } from "../../src/components/Nav";
import { Leadership } from "../../src/components/Leadership";
import { NextPage } from "next";

const LeadershipPage: NextPage = () => {
  return (
    <Stack alignItems="center">
      <Nav />
      <Box sx={{ width: "75%", mt: 4 }}>
        <Leadership />
      </Box>
    </Stack>
  );
}

export default LeadershipPage;


