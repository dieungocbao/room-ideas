import React, { useState } from "react"
import {
  Box,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuList,
} from "@chakra-ui/react"
import { FaSlidersH } from "react-icons/fa"
import MenuSelectItem from "./MenuSelectItem"
import ThemeToggleButton from "./ThemeToggleButton"

const query_strings = ["Hot", "New", "Top"]

const subRedditList = [
  "r/battlestations",
  "r/gamingsetups",
  "r/macsetups",
  "r/setups",
  "r/desksetup",
  "r/Minimal_Setups",
]

const MainMenu: React.FC<{}> = () => {
  const [filterString, setFilterString] = useState<string>(query_strings[0])
  return (
    <Box ml={2}>
      <Menu isLazy id="navbar-menu">
        <MenuButton
          as={IconButton}
          _focus={{ boxShadow: "none" }}
          icon={<Icon as={FaSlidersH} />}
          variant="none"
          aria-label="Options"
        />
        <MenuList>
          <MenuGroup title="Filter">
            {query_strings.map((item) => (
              <MenuSelectItem key={item}>{item}</MenuSelectItem>
            ))}
          </MenuGroup>
          <MenuGroup title="Subreddit">
            {subRedditList.map((item) => (
              <MenuSelectItem key={item}>{item}</MenuSelectItem>
            ))}
          </MenuGroup>
        </MenuList>
      </Menu>
      <ThemeToggleButton />
    </Box>
  )
}

export default MainMenu
