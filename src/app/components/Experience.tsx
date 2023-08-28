import { Stack, Typography } from "../../../node_modules/@mui/material/index"; 

export const Experience = () => {
    return (
      <Stack>
        <Typography variant="h6">Experience</Typography>
        <Stack spacing={4}>
          <Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Software Engineer</Typography>
              <Typography>Jan 2022 – Present</Typography>
            </Stack>
            <Typography>Abyss Solutions Pty. Ltd.</Typography>
            <div>
              <div>
                - Delivered key functionalities to a web app that improved the turnaround time of another teams’ work by 400%
              </div>
              <div>
                - Quickly mocked up prototypes necessary for engaging stakeholders
              </div>
              <div>
                - Proposed and developed a creative solution to a data problem the company had
              </div>
              <div>
                - Led sprint demos and feature approval meetings with product owners
              </div>
              <div>
                - React, nextjs, nestjs, gql, mongo
              </div>
            </div>
            <div>
              Key achievements
            </div>
            <div>
              Key learnings: design process and importance
            </div>
          </Stack>
          <Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Junior Software Developer</Typography>
              <Typography>Apr 2020 – Jul 2021</Typography>
            </Stack>
            <Typography>SeaLadder Pty. Ltd.</Typography>
            <div>
              <div>
                - Designed and implemented full-stack solutions using SOLID principles, microservice architecture, and RESTful API’s.
              </div>
              <div>
                - Developed code with test driven development using xUnit, Jasmine, Karma combined with the Spectator library.
              </div>
              <div>
                - Presented code demos to stakeholders
              </div>
              <div>
                - Tech stack: Angular, ASP.NET, Postgres, Azure
              </div>
            </div>
            <div>
              Key achievements
            </div>
            <div>
              Key learnings: design process and importance
            </div>
          </Stack>
        </Stack>
    </Stack>
  ); 
}
