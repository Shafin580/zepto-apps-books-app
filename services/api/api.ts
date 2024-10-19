import { PATHS } from "router.config"
import { getAPIResponse } from "./get-api-response"

export const fallbackImage = "/img/img-placeholder.jpg"

const basePath = String(process.env.NEXT_PUBLIC_API_MASK_URL)

// + Function to get list of books
export const getBookList = async ({
  page,
  search,
  topic,
  ids,
}: {
  page: number | string
  search: string
  topic: string
  ids?: string
}) => {
  const data = await getAPIResponse({
    basePath: basePath,
    apiPath: PATHS.BOOKS.LIST({
      page: page,
      search: search,
      topic: topic,
      ids: ids,
    }).root,
  })

  let formattedData: BookListProps[] = []
  let paginationData: { count: number; next: string | null; previous: string | null } | null = null

  if (data["status"] == 200) {
    formattedData = data["data"]["results"]
    paginationData = {
      count: Number(data["data"]["count"]),
      next: data["data"]["next"],
      previous: data["data"]["previous"],
    }
  }

  console.log("Book List:", formattedData)

  return { status: Number(data["status"]), data: formattedData, paginationData: paginationData }
}

// + Function To get Book Details by Id
export const getBookDetails = async (id: string | number) => {
  const response = await getAPIResponse({
    basePath: basePath,
    apiPath: PATHS.BOOKS.DYNAMIC(id).root,
  })

  let formattedData: BookDetailProps | null = null

  if (response.status == 200) {
    formattedData = response["data"]
  }

  return { status: Number(response.status), data: formattedData }
}
