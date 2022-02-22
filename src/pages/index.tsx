import React, { useEffect } from "react"
import { Grid, Skeleton } from "@chakra-ui/react"
import Card from "../components/Card"
import { useGetPosts } from "../hooks/useGetPosts"
import { useStore } from "../store"

const Home: React.FC<{}> = () => {
  const { filterString, subReddits } = useStore()
  const { isLoading, data, refetch, isFetching } = useGetPosts(
    subReddits,
    filterString,
    ""
  )

  useEffect(() => {
    refetch()
  }, [filterString, subReddits])

  if (isLoading || isFetching) {
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
        {Array.from(Array(9).keys()).map((item) => (
          <>
            <Skeleton
              key={item}
              height={275}
              borderRadius="0.375rem"
              userSelect="none"
              pointerEvents="none"
            />
          </>
        ))}
      </Grid>
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
      {data?.data.children.map(({ data }: { data: any }) => (
        <Card key={data.url} {...data} />
      ))}
    </Grid>
  )
}

export default Home
