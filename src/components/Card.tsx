import { Badge, Box, GridItem, Image } from "@chakra-ui/react"
import { useGetPosts } from "../hooks/useGetPosts"
import { useStore } from "../store"

const Card = () => {
  const { filterString, subReddits } = useStore()
  const { isLoading, data } = useGetPosts(subReddits, filterString, "")
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  }

  // console.log(data)

  return (
    <GridItem bg="rgb(45, 55, 72)" borderRadius="0.375rem" overflow="hidden">
      <Box height={240} overflow="hidden" cursor="pointer">
        <Image
          w="100%"
          h="100%"
          objectFit="cover"
          verticalAlign="middle"
          _hover={{
            transform: "scale(1.1) translateZ(0px)",
          }}
          src={property.imageUrl}
          alt={property.imageAlt}
          style={{
            transition: "all 0.5s ease",
          }}
        />
      </Box>

      <Box p={4}>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h6"
          lineHeight="tight"
          isTruncated
        >
          {property.title}
        </Box>

        <Box>{property.formattedPrice}</Box>
      </Box>
    </GridItem>
  )
}

export default Card
