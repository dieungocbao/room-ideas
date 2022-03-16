import { ChakraProvider } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {ReactQueryDevtools} from 'react-query/devtools'
import Layout from "./components/layouts/Layout"
import Fonts from "./libs/fonts"
import theme from "./libs/theme"
import Home from "./pages"

export default function App() {
  const queryClient = new QueryClient()
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Fonts />
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </Layout>
        <ReactQueryDevtools position="bottom-right"/>
      </QueryClientProvider>
    </ChakraProvider>
  )
}
