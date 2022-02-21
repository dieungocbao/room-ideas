import React from "react"
import { Box, Flex, Icon, MenuItem } from "@chakra-ui/react"
import { FaCheck } from "react-icons/fa"
interface MenuItemProps {
  children: React.ReactChildren | string
  filterString?: string
  subReddits?: string[]
  onClickMenuItem: (filter: string) => void
}

const MenuSelectItem: React.FC<MenuItemProps> = ({
  children,
  filterString,
  subReddits,
  onClickMenuItem,
}) => {
  const filter: string = children as string
  let selected = false
  if (filterString) {
    selected = filterString === filter
  } else {
    selected = subReddits?.includes(filter) as boolean
  }
  return (
    <MenuItem closeOnSelect={false} onClick={() => onClickMenuItem(filter)}>
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
