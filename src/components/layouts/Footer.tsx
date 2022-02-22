import { Box } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Box textAlign="center" opacity={0.4} fontSize="sm" marginTop="auto" pb={8}>
      &copy; {new Date().getFullYear()} Dieu Ngoc Bao. All Rights Reserved.
    </Box>
  )
}

export default Footer
