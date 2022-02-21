import React from "react"
import { Box, Container } from "@chakra-ui/react"
import Footer from "../sections/Footer"
import Header from "../sections/Header"

interface LayoutProps {
  children: React.ReactChild
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Header />
      <Container maxW="container.md" pt={16}>
        {children}
      </Container>
      <Footer />
    </Box>
  )
}

export default Layout
