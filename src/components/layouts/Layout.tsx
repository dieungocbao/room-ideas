import React from "react"
import { Box, Container } from "@chakra-ui/react"
import Footer from "./Footer"
import Header from "./Header"

interface LayoutProps {
  children: React.ReactChild
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box minH='100vh' display='flex' flexDir='column'>
      <Header />
      <Container maxW="1280" flex={1} mt='95px'>
        {children}
      </Container>
      <Footer />
    </Box>
  )
}

export default Layout
