import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { IoMdSunny, IoMdMoon } from "react-icons/io"

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <IconButton
      _hover={{
        backgroundColor: useColorModeValue(
          "#EDF2F7",
          "rgba(255, 255, 255, 0.08)"
        ),
      }}
      ml={2}
      aria-label="Toggle theme"
      _focus={{ boxShadow: "none" }}
      variant="none"
      icon={useColorModeValue(<IoMdMoon />, <IoMdSunny />)}
      onClick={toggleColorMode}
    ></IconButton>
  )
}

export default ThemeToggleButton
