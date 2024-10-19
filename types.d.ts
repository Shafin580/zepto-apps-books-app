type BookListProps = {
  id: number
  title: string
  authors: {
    name: string
    birth_year: number
    death_year: number
  }[]
  translators: {
    name: string
    birth_year: number
    death_year: number
  }[]
  subjects: string[]
  bookshelves: string[]
  languages: string[]
  copyright: boolean
  media_type: string
  formats: {
    "text/html"?: string
    "application/epub+zip"?: string
    "application/x-mobipocket-ebook"?: string
    "application/rdf+xml": string
    "image/jpeg"?: string
    "text/plain; charset=us-ascii"?: string
    "application/octet-stream"?: string
    "text/html; charset=iso-8859-1"?: string
    "text/plain; charset=iso-8859-1"?: string
    "text/plain"?: string
    "audio/ogg"?: string
    "audio/mp4"?: string
    "audio/mpeg"?: string
    "text/html; charset=utf-8"?: string
    "text/plain; charset=utf-8"?: string
  }
  download_count: number
}

type BookDetailProps = {
  id: number
  title: string
  authors: {
    name: string
    birth_year: number
    death_year: number
  }[]
  translators: {
    name: string
    birth_year: number
    death_year: number
  }[]
  subjects: string[]
  bookshelves: string[]
  languages: string[]
  copyright: boolean
  media_type: string
  formats: {
    "text/html": string
    "application/epub+zip": string
    "application/x-mobipocket-ebook": string
    "application/rdf+xml": string
    "image/jpeg": string
    "text/plain; charset=us-ascii": string
    "application/octet-stream": string
  }
  download_count: number
}
