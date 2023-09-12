import { Stack, Typography } from "@mui/material"; 

export const Experience = () => {
    return (
      <Stack>
        <Typography variant="h6">Professional Experience and Projects</Typography>
        <Stack spacing={4}>
          <Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Software Engineer</Typography>
              <Typography>Jan 2022 – Present</Typography>
            </Stack>
            <Typography>Abyss Solutions Pty. Ltd.</Typography>
            <Stack>
              <Typography>
                - Researched, designed, and implemented a critical functionality for one of the companies’ key products
              </Typography>
              <Typography>
                - Quickly developed a prototype necessary for engaging external stakeholders
              </Typography>
              <Typography>
                - Planned and estimated work with team members to forecast development time needed
              </Typography>
              <Typography>
                - Collaborated with the designer to evaluate feasibility, and assist user testing
              </Typography>
              <Typography>
                - Brought the code coverage of our front-end unit tests up to 80%
              </Typography>
            </Stack>
            <Typography>
              Key achievement: Delivered key functionalities to a web app that improved the turnaround time of another teams’ work by 400%
            </Typography>
            <Typography>
              Key learnings: working with the design team, estimating work, scrum, debugging code, improving code performance, computer graphics (threejs)
            </Typography>
          </Stack>
          <Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography>ML Data Synthesiser project for company hackathon</Typography>
              <Typography>Apr 2022</Typography>
            </Stack>
            <Typography>Abyss Solutions Pty. Ltd.</Typography>
            <Stack>
              <Typography>
                - A experimental application that generates randomised images/screenshots of a 3d model
              </Typography>
              <Typography>
                - The screenshots would be used to train a machine learning model that’s used by a sensor drone
              </Typography>
              <Typography>
                - The training data would be automatically labelled 
              </Typography>
              <Typography>
                - The app aimed to drastically reduce the time required to generate training data
              </Typography>
              <Typography>
                - I had proposed, the idea and developed it with the help of my team
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Junior Software Developer</Typography>
              <Typography>Apr 2020 – Jul 2021</Typography>
            </Stack>
            <Typography>SeaLadder Pty. Ltd.</Typography>
            <Stack>
              <Typography>
                - Designed and implemented full-stack solutions using SOLID principles, microservice architecture, and RESTful API’s.
              </Typography>
              <Typography>
                - Developed code with test driven development using xUnit, Jasmine, Karma combined with the Spectator library.
              </Typography>
              <Typography>
                - Onboarded and mentored new interns
              </Typography>
              <Typography>
                - Tech stack: Angular, ASP.NET, Postgres, Azure
              </Typography>
            </Stack>
            <Typography>
              Key achievements: designing API, designing interface, heavily involved in the design process, implemented large scope features, wrote most of the unit tests.
            </Typography>
            <Typography>
              Key learnings: full stack development, modern software development processes and tools, test driven development, scrum sprints.
            </Typography>
          </Stack>
        </Stack>
    </Stack>
  ); 
}
