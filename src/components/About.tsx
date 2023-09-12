import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export const About = () => {
    return (
      <Stack>
        <Typography variant="h6">About Me</Typography>
        <Stack direction="row" spacing={6}>

        <Stack spacing={2}>
          <Typography variant="body1">
          Hello, I am a software engineer with 2 years’ experience in full stack web development. My UTS coursework spanned a wide range of areas such as networking, web security, signal processing and embedded software. I enjoyed signal processing the most and have applied that knowledge in creating an app that can identify musical tones over a microphone. 
          </Typography>
          <Typography variant="body1">

I am currently a software developer at Abyss Solutions and have developed key functionalities for an app that involves interfacing with a 3d model. I think the biggest takeaway I have from my work experience is that I like working with and supporting others, getting good work done and creating a team that feels fulfilled by their work, and happily improving.
          </Typography>
          <Typography variant="body1">

I am seeking a mid-level software engineering role where I can leverage my experience in designing and implementing full-stack web components. I value writing robust, reusable, and extendable code. And continuously learning about new technologies and workflows that uplift my team and work.
          </Typography>

        </Stack>
        <img src="https://media.licdn.com/dms/image/D5603AQHex__uQXYuAg/profile-displayphoto-shrink_800_800/0/1685270751590?e=1700092800&v=beta&t=EMydFZzMSDUddiJC3r12znhvHowzWUvGpGQ0wjCsWno" alt="profile" height={400} />
        </Stack>
      </Stack>
    ); 
  }