import BookList from "@components/BookList.client"
import { QueryClient } from "@tanstack/react-query"
import { QUERY } from "query.config"
import { getBookList } from "services/api/api"

const serverQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000 * 2,
      retry: true,
    },
  },
})

export default async function Home() {
  return (
    <>
      <BookList />
    </>
  )
}
