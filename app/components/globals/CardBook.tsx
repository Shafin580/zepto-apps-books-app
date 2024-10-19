"use client"

import { cn } from "@/libs/utils"
import ButtonIcon from "@library/ButtonIcon"
import { Card } from "@shad/card"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { fallbackImage } from "services/api/api"

interface CardBookProps {
  id?: string
  title?: string
  bookImage?: string
  authorName?: string
  className?: string
  href?: string
  genre?: string[]
}

export default function CardBook({
  title = "Book Name",
  bookImage = "/img/slide1.png",
  authorName = "Author Name",
  className = "",
  href = "#",
  id,
  genre,
}: CardBookProps) {
  const [bookImageSrc, setBookImageSrc] = useState<string>("")

  useEffect(() => {
    setBookImageSrc(bookImage)
  }, [bookImage])
  return (
    <>
      <Link href={href} className={cn("group/card product-card", className)}>
        <Card className="group-hover/card:bg-mute overflow-clip rounded-2xl transition-all hover:shadow">
          {/*//+ Image Container */}
          <div className="img-container relative h-40 w-full overflow-clip">
            <Image
              src={bookImageSrc}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="transition-transform group-hover/card:scale-105"
              onError={() => {
                setBookImageSrc(fallbackImage)
              }}
            />
          </div>
          {/*//+ Info Container */}
          <div className="info grid h-60 p-4 md:grid-cols-4">
            <div className="flex flex-col justify-between space-y-2 md:col-span-3">
              <div className="text-xs text-muted-foreground">Author: {authorName}</div>
              <div className="text-base">Book Id: {id}</div>
              <div className="text-base">Book Name: {title}</div>
              <div className="flex flex-wrap gap-2">
                <p className="text-xs">Genre:</p>
                {genre?.map((g, index) => (
                  <span key={index} className="rounded-md bg-gray-200 px-1 py-1 text-xs font-bold">
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </>
  )
}
