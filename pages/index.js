import Sidebar from '../components/Sidebar'
import Calendar from '../components/Calendar'
import { Flex, Box, Container, Text, IconButton } from '@chakra-ui/react'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <Flex direction="columun">
          <Flex position="sticky" zIndex={"sticky"}>
            <Sidebar name={session.user.name} image={session.user.image} />
          </Flex>
          <Flex direction="columun" grow="1" w="100%">
            <Calendar />
          </Flex>
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