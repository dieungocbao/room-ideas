import {
  Box,
  GridItem,
  Icon,
  Image,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import { HiArrowUp } from 'react-icons/hi'
import { Post } from '../hooks/useGetPosts'

interface CardProps {
  post: Post
  onImageClick: (post: Post) => void
}

const Card: React.FC<CardProps> = ({ post, onImageClick }) => {
  const { media_metadata, preview, title, author, ups } = post
  const metaImg = media_metadata
    ? media_metadata[Object.keys(media_metadata)[0]].p[4].u
    : undefined

  const previewImage =
    preview?.images[0]?.resolutions[
      preview?.images[0]?.resolutions?.length > 3 ? 3 : 2
    ]?.url
  if (!metaImg && !previewImage) {
    return null
  }
  return (
    <GridItem
      bg={useColorModeValue('rgb(237, 242, 247)', 'rgb(45, 55, 72)')}
      borderRadius='0.375rem'
      overflow='hidden'
    >
      <Box
        height={240}
        overflow='hidden'
        cursor='pointer'
        onClick={() => onImageClick(post)}
      >
        <Image
          w='100%'
          h='100%'
          objectFit='cover'
          verticalAlign='middle'
          _hover={{
            transform: 'scale(1.1) translateZ(0px)'
          }}
          src={previewImage || metaImg}
          alt={previewImage || metaImg}
          style={{
            transition: 'all 0.75s ease'
          }}
        />
      </Box>

      <Box p={3}>
        <Box
          fontWeight='500'
          fontSize='0.9rem'
          letterSpacing='0.02rem'
          mb='2px'
          isTruncated
        >
          {title}
        </Box>
        <Box display='flex' alignItems='center' justifyContent='space-between'>
          <Box display='flex' fontSize='0.7rem' letterSpacing='0.03rem'>
            Posted by{' '}
            <Box ml={1}>
              <Link
                href={`https://www.reddit.com/user/${author}`}
                target='_blank'
                fontWeight='500'
              >
                {' '}
                u/{author}
              </Link>
            </Box>
          </Box>
          <Box display='flex' alignItems='center' fontSize='0.8rem'>
            <Icon as={HiArrowUp} mr='2px' /> {ups}
          </Box>
        </Box>
      </Box>
    </GridItem>
  )
}

export default Card
