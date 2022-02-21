import React from "react"
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
import MenuSelectItem from "./layouts/MenuSelectItem"
import ThemeToggleButton from "./ThemeToggleButton"
import { subRedditList, useStore } from "../store"

const query_strings = ["Hot", "New", "Top"]

const MainMenu: React.FC<{}> = () => {
  const {
    filterString,
    handleChooseFilterString,
    subReddits,
    handleChooseSubReddits,
  } = useStore()
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
              <MenuSelectItem
                key={item}
                filterString={filterString}
                onClickMenuItem={handleChooseFilterString}
              >
                {item}
              </MenuSelectItem>
            ))}
          </MenuGroup>
          <MenuGroup title="Subreddit">
            {subRedditList.map((item) => (
              <MenuSelectItem
                key={item}
                subReddits={subReddits}
                onClickMenuItem={handleChooseSubReddits}
              >
                {item}
              </MenuSelectItem>
            ))}
          </MenuGroup>
        </MenuList>
      </Menu>
      <ThemeToggleButton />
    </Box>
  )
}

export default MainMenu
