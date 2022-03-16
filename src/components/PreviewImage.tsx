import 'react-responsive-carousel/lib/styles/carousel.min.css'
import React from 'react'
import {
  Box,
  Button,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useBreakpointValue,
  Link
} from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'

interface IPreviewImage {
  isOpen: boolean
  onClose: () => void
  post: any
}

const PreviewImage: React.FC<IPreviewImage> = ({ isOpen, onClose, post }) => {
  const size = useBreakpointValue({ base: 'md', md: '2xl' })
  const { title, media_metadata, preview, is_gallery, author, permalink } = post
  const galleryIds = is_gallery ? Object.keys(media_metadata) : []
  const listImg = galleryIds.map((id) => media_metadata[id].p[3])
  return (
    <Modal
      isCentered
      scrollBehavior='inside'
      size={size}
      isOpen={isOpen}
      onClose={onClose}
      motionPreset='slideInBottom'
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {is_gallery ? (
            <Box mt={4} w='100%'>
              <Carousel showThumbs={false} dynamicHeight useKeyboardArrows>
                {listImg.map((imgRes: any) => (
                  <Img key={imgRes.x} src={imgRes.u} />
                ))}
              </Carousel>
            </Box>
          ) : (
            <Img mt={4} src={preview.images[0].resolutions[3].url} />
          )}
          <Box display='flex' fontSize='0.8rem' letterSpacing='0.03rem' mt={4}>
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
        </ModalBody>

        <ModalFooter>
          <Button variant='solid' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            variant='ghost'
            as='a'
            href={`https://www.reddit.com${permalink}`}
            target='_blank'
          >
            Open in Reddit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default PreviewImage
