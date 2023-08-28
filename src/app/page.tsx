import { Box, Stack } from '../../node_modules/@mui/material/index'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'

export default function Main() {
  return (
    <>
      <Nav />
      <Stack alignItems="center">
        <Box sx={{ width: "75%"}}>
          <Stack spacing={4}>
            <About />
            <Experience />
            <Projects />
          </Stack>
        </Box>
      </Stack>
    </>
  )
}
