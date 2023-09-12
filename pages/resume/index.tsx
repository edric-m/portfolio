import { Box } from "@mui/material";
import { Nav } from "../../src/components/Nav";
import { Resume } from "../../src/components/Resume";
import { NextPage } from "next";

const ResumePage: NextPage = () => {
  return (
    <Box sx={{ width: "75%"}}>
      <Nav />
      <Resume />
    </Box>
  );
}

export default ResumePage;