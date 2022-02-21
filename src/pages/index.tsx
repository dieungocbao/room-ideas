import { Box, Container, Flex, Grid } from "@chakra-ui/react"
import Card from "../components/Card"
import { useGetPosts } from "../hooks/useGetPosts"
import { useStore } from "../store"

const Home = () => {
  const { filterString, subReddits } = useStore()
  const { isLoading, data } = useGetPosts(subReddits, filterString, "")

  // console.log(data)

  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap='1.25rem'
      mt='1.5rem'
    >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  )
}

export default Home
