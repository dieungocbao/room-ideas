import { ChakraProps, extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const styles = extendTheme({
  global: (props: ChakraProps) => ({
    body: {
      bg: mode("#F0E7DB", "#202023")(props),
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
      color: mode("#3d7aed", "#ff63c3")(props),
      textUnderlineOffset: 3,
    }),
  },
}

const colors = {
  grassTeal: "#88ccca",
}

const fonts = {
  body: 'Poppins',
  heading: "'M PLUS Rounded 1c'",
}

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
