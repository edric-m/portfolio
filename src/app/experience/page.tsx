import { Box } from "../../../node_modules/@mui/material/index";
import { Experience } from "../components/Experience";
import { Nav } from "../components/Nav";

export default function ExperiencePage() {
    return (
      <Box sx={{ width: "75%"}}>
        <Nav />
        <Experience />
      </Box>
    );
  }