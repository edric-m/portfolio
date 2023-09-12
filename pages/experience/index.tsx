import { Box } from "@mui/material";
import { Experience } from "../../src/components/Experience";
import { Nav } from "../../src/components/Nav";
import { NextPage } from "next";

  const ExperiencePage: NextPage = () => {
    return (
      <Box sx={{ width: "75%"}}>
        <Nav />
        <Experience />
      </Box>
    );
  }
  
  export default ExperiencePage;