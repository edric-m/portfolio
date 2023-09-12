'use client';
import { Box, Stack } from "@mui/material";
import { About } from "../../src/components/About";
import { Nav } from "../../src/components/Nav";
import { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <Stack alignItems="center">
      <Nav />
      <Box sx={{ width: "75%", mt: 4 }}>
        <About />
      </Box>
    </Stack>
  );
}

export default AboutPage;
