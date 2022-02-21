import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/layouts/Layout"
import Fonts from "./libs/fonts"
import theme from "./libs/theme"
import Home from "./pages"

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ChakraProvider>
  )
}
