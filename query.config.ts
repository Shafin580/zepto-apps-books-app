/**
 * List of all the query keys in the app for data fetching
 */
export const QUERY = {
  BOOKS: {
    LIST: ({ page, search, topic, ids }: { page: string | number; search: string; topic: string, ids?: string }) => {
      return { key: `book-list-${page}-${search}-${topic}-${ids}` }
    },
    DYNAMIC: (id: string | number) => {
      return { key: `book-details-${id}` as const }
    },
  } as const,
} as const
