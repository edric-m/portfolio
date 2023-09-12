import { Box } from "@mui/material";
import { NextPage } from "next";
import { Nav } from "@/components/Nav";
import { Teamwork } from "@/components/Teamwork";

const TeamworkPage: NextPage = () => {
  return (
    <Box sx={{ width: "75%"}}>
      <Nav />
      <Teamwork />
    </Box>
  );
}

export default TeamworkPage;
