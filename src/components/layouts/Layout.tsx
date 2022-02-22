import React from "react"
import { Box, Container } from "@chakra-ui/react"
import Footer from "./Footer"
import Header from "./Header"

interface LayoutProps {
  children: React.ReactChild
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box flex={1} display="flex" flexDir="column">
      <Header />
      <Container maxW="1280" py={16} minH="inherit" flex={1} display="flex">
        {children}
      </Container>
      <Footer />
    </Box>
  )
}

export default Layout
