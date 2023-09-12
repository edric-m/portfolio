import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Leadership } from "@/components/Leadership";
import { Nav } from "@/components/Nav";
import { Teamwork } from "@/components/Teamwork";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <>
      <Nav />
      <Stack alignItems="center">
        <Box sx={{ width: "75%"}}>
          <Stack spacing={4}>
            <About />
            <Experience />
            <Education />
            <Leadership />
            <Teamwork />
            <Contact />
          </Stack>
        </Box>
      </Stack>
    </>
  )
}

export default HomePage;
