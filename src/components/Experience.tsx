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
            <Typography>
              <div>
                - Researched, designed, and implemented a critical functionality for one of the companies’ key products
              </div>
              <div>
                - Quickly developed a prototype necessary for engaging external stakeholders
              </div>
              <div>
                - Planned and estimated work with team members to forecast development time needed
              </div>
              <div>
                - Collaborated with the designer to evaluate feasibility, and assist user testing
              </div>
              <div>
                - Brought the code coverage of our front-end unit tests up to 80%
              </div>
            </Typography>
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
            <Typography>
              <div>
                - A experimental application that generates randomised images/screenshots of a 3d model
              </div>
              <div>
                - The screenshots would be used to train a machine learning model that’s used by a sensor drone
              </div>
              <div>
                - The training data would be automatically labelled 
              </div>
              <div>
                - The app aimed to drastically reduce the time required to generate training data
              </div>
              <div>
                - I had proposed, the idea and developed it with the help of my team
              </div>
            </Typography>
          </Stack>
          <Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Junior Software Developer</Typography>
              <Typography>Apr 2020 – Jul 2021</Typography>
            </Stack>
            <Typography>SeaLadder Pty. Ltd.</Typography>
            <Typography>
              <div>
                - Designed and implemented full-stack solutions using SOLID principles, microservice architecture, and RESTful API’s.
              </div>
              <div>
                - Developed code with test driven development using xUnit, Jasmine, Karma combined with the Spectator library.
              </div>
              <div>
                - Onboarded and mentored new interns
              </div>
              <div>
                - Tech stack: Angular, ASP.NET, Postgres, Azure
              </div>
            </Typography>
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
