import React from "react"
import {
  Box,
  Container,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react"
import MainMenu from "./MainMenu"

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#FFFFFF", "#202023")}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <Container p={2} maxW="container.lg">
        <Flex alignItems="center" justifyContent="space-between">
          <Heading as="h1" size="lg" letterSpacing="tighter">
            Rocore
          </Heading>
          {/* <ThemeToggleButton /> */}

          <MainMenu />
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
