import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/layouts/Layout"
import Home from "./pages"

export default function App() {
  return (
    <ChakraProvider>
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
