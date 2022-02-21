import React from "react"
import { Box } from "@chakra-ui/react"
import Navbar from "./Navbar"

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Box>
      <Navbar />
    </Box>
  )
}

export default Header
