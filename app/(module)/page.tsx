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
  const booklist = await serverQueryClient.fetchQuery({
    queryKey: [QUERY.BOOKS.LIST({ page: 1, search: "", topic: "" }).key],
    queryFn: async () => {
      const data = await getBookList({ page: 1, search: "", topic: "" })
      return data
    },
  })
  return (
    <>
      <BookList initialData={booklist} />
    </>
  )
}
