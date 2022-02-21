import React from "react"
import { Box, Container } from "@chakra-ui/react"
import Navbar from "../sections/Navbar"

interface LayoutProps {
  children: React.ReactChild
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Container maxW="container.md" pt={16}>
        {children}
      </Container>
    </Box>
  )
}

export default Layout
