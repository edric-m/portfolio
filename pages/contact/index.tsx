import { Box } from "@mui/material";
import { Contact } from "../../src/components/Contact";
import { Nav } from "../../src/components/Nav";
import { NextPage } from "next";

const ContactPage: NextPage = () => {
  return (
    <Box sx={{ width: "75%"}}>
      <Nav />
      <Contact />
    </Box>
  );
}

export default ContactPage;