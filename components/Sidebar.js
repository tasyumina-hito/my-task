import React, { useState } from 'react'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    FiCalendar,
    FiUser,
    FiDollarSign,
    FiBriefcase,
    FiSettings
} from 'react-icons/fi'
import { IoPawOutline } from 'react-icons/io5'
import NavItem from '../components/NavItem'
import {signOut } from "next-auth/react"

export default function Sidebar(props) {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="sticky"
            left="5"
            h="95vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius="30px"
            w="200px"
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
                <NavItem navSize={navSize} icon={FiHome} title="Dashboard" description="This is the description for the dashboard." />
                <NavItem navSize={navSize} icon={FiCalendar} title="Calendar" active />
                <NavItem navSize={navSize} icon={FiUser} title="Clients" />
                <NavItem navSize={navSize} icon={FiBriefcase} title="Reports" />
                <NavItem navSize={navSize} icon={FiSettings} title="Settings" />
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems="flex-start"
                mb={4}
            >
                <Divider display="flex" />
                <Flex mt={4} align="center">
                    <Avatar size="sm" src={props.image} />
                    <Flex flexDir="column" ml={4} display="flex">
                        <Heading as="h3" size="sm">{props.name}</Heading>
                        <Text color="gray">Admin</Text>
                        <button onClick={() => signOut()}>Sign out</button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}