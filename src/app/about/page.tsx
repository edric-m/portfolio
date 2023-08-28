import { Box } from "../../../node_modules/@mui/material/index";
import { About } from "../components/About";
import { Nav } from "../components/Nav";

export default function AboutPage() {
  return (
    <Box sx={{ width: "75%"}}>
      <Nav />
      <About />
    </Box>
  );
}
