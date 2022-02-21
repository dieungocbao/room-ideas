import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react"
import React from "react"
import { Icon } from "@chakra-ui/react"
import { FaSlidersH } from "react-icons/fa"
import MenuSelectItem from "./MenuSelectItem"

interface NavbarProps {}

const subRedditList = [
  "r/battlestations",
  "r/gamingsetups",
  "r/macsetups",
  "r/setups",
  "r/desksetup",
  "r/Minimal_Setups",
]

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#FFFFFF", "#202023")}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <Container p={2} maxW="container.md">
        <Flex alignItems="center" justifyContent="space-between">
          <Heading as="h1" size="lg" letterSpacing="tighter">
            Room Ideas
          </Heading>
          {/* <ThemeToggleButton /> */}

          <Box ml={2}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<Icon as={FaSlidersH} />}
                variant=""
                aria-label="Options"
              />
              <MenuList>
                <MenuGroup title="Filter">
                  <MenuSelectItem>Hot</MenuSelectItem>
                  <MenuSelectItem>New</MenuSelectItem>
                  <MenuSelectItem>Top</MenuSelectItem>
                </MenuGroup>
                <MenuGroup title="Subreddit">
                  {subRedditList.map((item) => (
                    <MenuSelectItem key={item}>{item}</MenuSelectItem>
                  ))}
                </MenuGroup>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
