import React, { useState } from "react"
import { Box, Flex, Icon, MenuItem } from "@chakra-ui/react"
import { FaCheck } from "react-icons/fa"
interface MenuItemProps {
  children: React.ReactChildren | string
  selected?: boolean
}

const MenuSelectItem: React.FC<MenuItemProps> = ({ children }) => {
  const [selected, setSelected] = useState(true)
  return (
    <MenuItem
      closeOnSelect={false}
      onClick={() => setSelected((selected) => !selected)}
    >
      <Flex alignItems="center" cursor="pointer" className="">
        <Box w={4} h={5}>
          {selected ? <Icon as={FaCheck} w={3} h={3} /> : null}
        </Box>
        <Box ml={3}>{children}</Box>
      </Flex>
    </MenuItem>
  )
}

export default MenuSelectItem
