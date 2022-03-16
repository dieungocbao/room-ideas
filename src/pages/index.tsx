import React, { useState } from 'react'
import { Box, Button, Grid, Skeleton, useDisclosure } from '@chakra-ui/react'
import Card from '../components/Card'
import { useGetPosts } from '../hooks/useGetPosts'
import { useStore } from '../store'
import { BsArrowRepeat } from 'react-icons/bs'
import PreviewImage from '../components/PreviewImage'

const Home: React.FC<{}> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const listSkeleton = Array.from(Array(15).keys())
  const { filterString, subReddits } = useStore()
  const [selectedPost, setSelectedPost] = useState(null)
  const { isLoading, data, fetchNextPage, isFetchingNextPage } = useGetPosts(
    subReddits,
    filterString,
    ''
  )

  if (isLoading) {
    return (
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)'
        }}
        gap='1.25rem'
        mt='1.5rem'
      >
        {listSkeleton.map((item) => {
          return (
            <Skeleton
              key={item}
              height={275}
              borderRadius='0.375rem'
              userSelect='none'
              pointerEvents='none'
            />
          )
        })}
      </Grid>
    )
  }

  const view = (post: any) => {
    setSelectedPost(post)
    onOpen()
  }
  return (
    <>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)'
        }}
        gap='1.25rem'
        mt='1.5rem'
      >
        {data?.pages.map((page) => {
          return page.data.children.map(({ data }: { data: any }) => {
            return <Card key={data.id} post={data} onImageClick={view} />
          })
        })}

        {isFetchingNextPage &&
          listSkeleton.map((item) => {
            return (
              <Skeleton
                key={item}
                height={275}
                borderRadius='0.375rem'
                userSelect='none'
                pointerEvents='none'
              />
            )
          })}
      </Grid>
      {selectedPost && (
        <PreviewImage isOpen={isOpen} onClose={onClose} post={selectedPost} />
      )}
      <Box textAlign='center' mt={'2rem'}>
        <Button
          leftIcon={<BsArrowRepeat />}
          variant='solid'
          onClick={() => fetchNextPage()}
        >
          Load more
        </Button>
      </Box>
    </>
  )
}

export default Home
