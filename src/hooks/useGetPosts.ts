import { useInfiniteQuery } from 'react-query'

// https://www.reddit.com/r/battlestations+gamingsetups+macsetups+setups+desksetup+Minimal_Setups/hot.json?raw_json=1&limit=15

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
