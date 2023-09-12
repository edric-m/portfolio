'use client';
import { Box } from "@mui/material";
import { About } from "../../src/components/About";
import { Nav } from "../../src/components/Nav";
import { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <Box sx={{ width: "75%"}}>
      <Nav />
      <About />
    </Box>
  );
}

export default AboutPage;
