/**
 * List of all the links in the app for frontend rendering
 */
export const LINKS = {
  HOME: "/" as const,
  WISHLIST: "/wishlist" as const,
  BOOKS: {
    DYNAMIC: (id: string) => {
      return { path: `/book/${id}` as const }
    },
  } as const,
  ERROR: (code: number) => {
    return { home: `/error?code=${code}` } as const
  },
} as const

/**
 * List of all the paths in the app for backend data fetching
 */
export const PATHS = {
  BOOKS: {
    LIST: ({
      page = 1,
      search,
      topic,
      ids,
    }: {
      page: string | number
      search?: string
      topic?: string
      ids?: string
    }) => {
      return {
        root: `/books?page=${page}${search && search.trim().length > 0 ? `&search=${search}` : ""}${topic && topic.trim().length > 0 ? `&topic=${topic}` : ""}${ids ? `&ids=${ids}` : ""}` as const,
      }
    },
    DYNAMIC: (id: string | number) => {
      return { root: `/books/${id}` as const }
    },
  } as const,
} as const
