import { Box, Stack } from "@mui/material";
import { Experience } from "../../src/components/Experience";
import { Nav } from "../../src/components/Nav";
import { NextPage } from "next";

  const ExperiencePage: NextPage = () => {
    return (
      <Stack alignItems="center">
        <Nav />
        <Box sx={{ width: "75%", mt: 4 }}>
          <Experience />
        </Box>
    </Stack>
    );
  }
  
  export default ExperiencePage;