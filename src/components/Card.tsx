import {
  Box,
  GridItem,
  Icon,
  Image,
  Link,
  useColorModeValue,
} from "@chakra-ui/react"
import { HiArrowUp } from "react-icons/hi"

interface ResolutionImg {
  url: string
  height: number
  width: number
}

interface ImageProp {
  id: string
  resolutions: ResolutionImg[]
}

interface PreviewGallery {
  u: string
  x: number
  y: number
}

interface IGallery {
  p: PreviewGallery[]
  s: string
}

interface MediaMetaDataProp {
  [key: string]: IGallery
}

interface CardProps {
  url: string
  title: string
  author: string
  ups: number
  preview: {
    images: ImageProp[]
  }
  media_metadata?: MediaMetaDataProp
}

const Card: React.FC<CardProps> = ({
  title,
  preview,
  author,
  ups,
  media_metadata,
}) => {
  const metaImg = media_metadata
    ? media_metadata[Object.keys(media_metadata)[0]].p[4].u
    : undefined

  const previewImage = preview?.images[0].resolutions[3].url
  return (
    <GridItem
      bg={useColorModeValue("rgb(237, 242, 247)", "rgb(45, 55, 72)")}
      borderRadius="0.375rem"
      overflow="hidden"
    >
      <Box height={240} overflow="hidden" cursor="pointer">
        <Image
          w="100%"
          h="100%"
          objectFit="cover"
          verticalAlign="middle"
          _hover={{
            transform: "scale(1.1) translateZ(0px)",
          }}
          src={previewImage || metaImg}
          alt={previewImage || metaImg}
          style={{
            transition: "all 0.75s ease",
          }}
        />
      </Box>

      <Box p={2}>
        <Box
          fontWeight="light"
          fontSize="0.9rem"
          letterSpacing="0.02rem"
          mb="2px"
        >
          {title}
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          fontWeight="thin"
        >
          <Box display="flex" fontSize="0.7rem" letterSpacing="0.03rem">
            Posted by{" "}
            <Box ml={1} fontWeight="500">
              <Link
                href={`https://www.reddit.com/user/${author}`}
                target="_blank"
              >
                {" "}
                u/{author}
              </Link>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" fontSize="0.8rem">
            <Icon as={HiArrowUp} mr="2px" /> {ups}
          </Box>
        </Box>
      </Box>
    </GridItem>
  )
}

export default Card
