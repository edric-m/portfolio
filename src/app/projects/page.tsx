import { Box } from "../../../node_modules/@mui/material/index";
import { Nav } from "../components/Nav";
import { Projects } from "../components/Projects";

export default function ProjectsPage() {
  return (
    <Box sx={{ width: "75%"}}>
      <Nav />
      <Projects />
    </Box>
  );
}
