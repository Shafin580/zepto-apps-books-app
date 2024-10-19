"use client"

import CardBook from "@components/globals/CardBook"
import Section from "@components/globals/Section"
import TextField from "@library/TextField"
import { Button } from "@shad/button"
import { Combobox } from "@shad/combobox"
import { useQuery } from "@tanstack/react-query"
import { QUERY } from "query.config"
import { useEffect, useState } from "react"
import { LINKS } from "router.config"
import { getBookList } from "services/api/api"
import SkeletonCard from "./Skeleton/SkeletonCard"

const BookList = ({
  initialData,
}: {
  initialData: {
    status: number
    data: BookListProps[]
    paginationData: {
      count: number
      next: string | null
      previous: string | null
    } | null
  }
}) => {
  const [bookList, setBookList] = useState<BookListProps[]>([])
  const [page, setPage] = useState(1)
  const [selectedGenre, setSelectedGenre] = useState<string>("")
  const [searchText, setSearchText] = useState<string>("")
  const [debouncedSearchText, setDebouncedSearchText] = useState("")
  const [hasNextPage, setHasNextPage] = useState(true)
  const [hasPreviousPage, setHasPreviousPage] = useState(false)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchText(searchText)
    }, 1500) // 1500ms delay

    return () => {
      clearTimeout(handler) // Clear timeout if searchText changes before the delay ends
    }
  }, [searchText])

  // + Function To Get Book List
  const { data: bookListQuery, isFetching: bookListFetchingQuery } = useQuery({
    queryKey: [QUERY.BOOKS.LIST({ page: page, search: debouncedSearchText, topic: selectedGenre }).key],
    queryFn: async () => {
      const data = await getBookList({ page: page, search: debouncedSearchText, topic: selectedGenre })
      return data
    },
    initialData: initialData,
  })

  useEffect(() => {
    if (bookListQuery) {
      if (bookListQuery.status == 200) {
        setBookList(bookListQuery.data)
        if (bookListQuery.paginationData) {
          setHasNextPage(bookListQuery.paginationData.next != null ? true : false)
          setHasPreviousPage(bookListQuery.paginationData.previous != null ? true : false)
        }
      }
    }
  }, [bookListQuery])

  useEffect(() => {
    console.log("Debug Pagination", hasNextPage, hasPreviousPage)
  }, [hasNextPage, hasPreviousPage])

  return (
    <Section>
      <header className="space-y-2">
        <h2 className="text-left">Book Listing Page</h2>
        <p className="max-w-lg text-pretty">
          Explore a curated collection of must-read books across every genre, handpicked to inspire, educate,
          and entertain.
        </p>
      </header>
      {/*//- Main Area */}
      <div className="mt-4 block items-start gap-4 xl:flex">
        {/*//- Right Area */}
        <div className="w-full">
          {/*//- Top Filter Bar */}
          <div className="flex items-start justify-between pb-4">
            {/* Left Section */}
            <div className="space-y-3">
              <TextField
                placeholder="Search Books"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.data as string)
                }}
              />
            </div>
            {/* Right Section Sort Dropdown */}
            <Combobox
              hideTypeAhead
              onChange={(e) => {
                console.log("Selected Genre:", e)
                setSelectedGenre(e)
              }}
            />
          </div>
          {/*//+ Grid Area */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {bookListFetchingQuery == false &&
              bookList.map((data, index) => {
                return (
                  <CardBook
                    key={index}
                    id={String(data.id)}
                    authorName={data.authors.length > 0 ? data.authors[0].name : "Unknown Author"}
                    bookImage={data.formats["image/jpeg"]}
                    title={data.title}
                    href={LINKS.BOOKS.DYNAMIC(String(data.id)).path}
                    genre={data.subjects}
                  />
                )
              })}
            {bookListFetchingQuery &&
              Array.from({ length: 10 }).map((_, index) => <SkeletonCard key={index} />)}
          </div>
          {bookList.length > 0 && bookListFetchingQuery == false && (
            <div className="mt-6 text-center">
              <Button
                variant={"ghost"}
                className="col-span-4"
                onClick={() => {
                  setPage((prev) => prev - 1)
                }}
              >
                Previous Page
              </Button>
              <Button
                variant={"ghost"}
                className="col-span-4"
                onClick={() => {
                  setPage((prev) => prev + 1)
                }}
              >
                Next Page
              </Button>
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}

export default BookList
