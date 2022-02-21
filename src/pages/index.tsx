import { useGetPosts } from "../hooks/useGetPosts"
import { useStore } from "../store"

const Home = () => {
  const { filterString, subReddits } = useStore()
  const { isLoading, data } = useGetPosts(subReddits, filterString, "")
  console.log(data)
  return <div>Home</div>
}

export default Home
