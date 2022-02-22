import { ChakraProps, extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const styles = extendTheme({
  global: (props: ChakraProps) => ({
    body: {
      bg: mode("rgb(255, 255, 255)", "#202023")(props),
      color: mode("rgb(26, 32, 44)", "rgba(255, 255, 255, 0.92)")(props),
    },
  }),
})

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props: ChakraProps) => ({
      color: mode("rgb(26, 32, 44)", "rgba(255, 255, 255, 0.92)")(props),
      textUnderlineOffset: 3,
    }),
  },
}

const fonts = {
  body: "Poppins",
  heading: "'M PLUS Rounded 1c'",
}

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}

const theme = extendTheme({ config, styles, components, fonts })
export default theme
