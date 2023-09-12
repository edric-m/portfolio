import { Box } from "@mui/material";
import { Nav } from "../../src/components/Nav";
import { NextPage } from "next";

const ResumePage: NextPage = () => {
  return (
    <Box sx={{ width: "75%"}}>
      <Nav />
    </Box>
  );
}

export default ResumePage;