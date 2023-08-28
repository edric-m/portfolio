import { Box } from "../../../node_modules/@mui/material/index";
import { Contact } from "../components/Contact";
import { Nav } from "../components/Nav";

export default function ContactPage() {
  return (
    <Box sx={{ width: "75%"}}>
      <Nav />
      <Contact />
    </Box>
  );
}
