import { Box } from "@mui/material";
import { Nav } from "../../src/components/Nav";
import { Leadership } from "../../src/components/Leadership";
import { NextPage } from "next";

const LeadershipPage: NextPage = () => {
  return (
    <Box sx={{ width: "75%"}}>
      <Nav />
      <Leadership />
    </Box>
  );
}

export default LeadershipPage;


