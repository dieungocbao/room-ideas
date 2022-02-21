import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { BiSun, BiMoon } from "react-icons/bi"

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <IconButton
      ml={2}
      aria-label="Toggle theme"
      _focus={{ boxShadow: "none" }}
      variant="none"
      icon={useColorModeValue(<BiMoon />, <BiSun />)}
      onClick={toggleColorMode}
    ></IconButton>
  )
}

export default ThemeToggleButton
