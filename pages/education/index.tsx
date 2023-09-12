import { Box } from "@mui/material";
import { Nav } from "../../src/components/Nav";
import { Education } from "../../src/components/Education";
import { NextPage } from "next";

const EducationPage: NextPage = () => {
  return (
    <Box sx={{ width: "75%"}}>
      <Nav />
      <Education />
    </Box>
  );
}

export default EducationPage;
