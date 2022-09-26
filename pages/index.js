import Sidebar from '../components/Sidebar'
import Calendar from '../components/Calendar'
import { Flex, Box, Grid, GridItem, Text, IconButton } from '@chakra-ui/react'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <Grid
          templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
          gridTemplateRows={'50px 1fr 30px'}
          gridTemplateColumns={'150px 1fr'}
          h='200px'
          gap='1'
          color='blackAlpha.700'
          fontWeight='bold'
        >
          <GridItem pl='2' bg='orange.300' area={'header'}>
            Header
          </GridItem>
          <GridItem pl='2' position="sticky" zIndex={"sticky"}  area={'nav'}>
            <Sidebar name={session.user.name} image={session.user.image} />
          </GridItem>
          <GridItem pl='2' h='calc(100vh)' area={'main'}>
            <Calendar />
            Signed in as {session.user.name} <br />
            <button onClick={() => signOut()}>Sign out</button>
          </GridItem>
          <GridItem pl='2' bg='blue.300' area={'footer'}>
            Footer
          </GridItem>
        </Grid>

        <Flex>
          <Box position="sticky" zIndex={"sticky"}>
          </Box>
          <Box display="flex" w="100%">
          </Box>
        </Flex>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}