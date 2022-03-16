import { useInfiniteQuery } from 'react-query'

// https://www.reddit.com/r/battlestations+gamingsetups+macsetups+setups+desksetup+Minimal_Setups/hot.json?raw_json=1&limit=15

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

export interface Post {
  url: string
  title: string
  author: string
  ups: number
  preview: {
    images: ImageProp[]
  }
  media_metadata?: MediaMetaDataProp
}

const fetchPosts = async (queryParams: any) => {
  const { queryKey, pageParam } = queryParams
  const [, subReddits, filter, afterQuery] = queryKey
  const after = pageParam ? pageParam[2] : afterQuery
  const res = await fetch(
    `https://www.reddit.com/r/${subReddits.join(
      '+'
    )}/${filter}.json?raw_json=1&after=${after}&limit=15`
  )
  return res.json()
}

export const useGetPosts = (
  subReddits: string[],
  filter: string,
  after: string | undefined
) => {
  return useInfiniteQuery(['posts', subReddits, filter, after], fetchPosts, {
    getNextPageParam: (lastPage, pages) => {
      return [subReddits, filter, lastPage.data.after]
    }
  })
}
