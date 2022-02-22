import { Box, Grid, Spinner } from "@chakra-ui/react"
import Card from "../components/Card"
import { useGetPosts } from "../hooks/useGetPosts"
import { useStore } from "../store"

const Home = () => {
  const { filterString, subReddits } = useStore()
  const { isLoading, data } = useGetPosts(subReddits, filterString, "")

  console.log(data)
  if (isLoading) {
    return (
      <Box
        flex={1}
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Spinner w="80px" height="80px" speed="0.75s" />
      </Box>
    )
  }

  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap="1.25rem"
      mt="1.5rem"
    >
      {data?.data.children.map(({ data }) => (
        <Card key={data.url} {...data} />
      ))}
    </Grid>
  )
}

export default Home
