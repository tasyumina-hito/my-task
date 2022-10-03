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
          <Flex direction="row" grow="1" w="100%">
            <Flex>
              <Calendar />
            </Flex>
            <Flex>
                <button onClick={() => {
                if(session.user.id == 'cl8ab64sv00103gvgup453job') {
                    console.log(session.user.id)
                    const makeTask = async () => {
                      await fetch('/api/task/task', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ userId: session.userId }),
                      })
                      console.log("test")
                    };
                  makeTask();
                }
                }}>test task</button>
            </Flex>
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

function create_task(user) {
  prisma.task.create({
    data: {
      userId: user,
      name: 'test'
    }
  })
}
