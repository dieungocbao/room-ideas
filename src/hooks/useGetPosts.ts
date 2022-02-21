import { useQuery } from "react-query"

// https://www.reddit.com/r/battlestations+gamingsetups+macsetups+setups+desksetup+Minimal_Setups/hot.json?raw_json=1&limit=15

const fetchPosts = async (
  subReddits: string[],
  filter: string,
  after: string = ""
) => {
  const res = await fetch(
    `https://www.reddit.com/r/${subReddits.join(
      "+"
    )}/${filter}.json?raw_json=1&after=${after}&limit=15`
  )
  return res.json()
}

export const useGetPosts = (
  subReddits: string[],
  filter: string,
  after: string
) => {
  return useQuery("posts", () => fetchPosts(subReddits, filter, after))
}
