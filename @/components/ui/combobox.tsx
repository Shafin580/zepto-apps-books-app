"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/libs/utils"
import { Button } from "@shad/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@shad/command"
import { Popover, PopoverContent, PopoverTrigger } from "@shad/popover"

const ddItems = [
  {
    value: "1",
    label: "Classic Fiction",
  },
  {
    value: "2",
    label: "Science Fiction",
  },
  {
    value: "3",
    label: "Historical Fiction",
  },
  {
    value: "4",
    label: "Fantasy",
  },
  {
    value: "5",
    label: "Dystopian",
  },
  {
    value: "6",
    label: "Coming-of-Age",
  },
  {
    value: "7",
    label: "Romance",
  },
  {
    value: "8",
    label: "Horror",
  },
  {
    value: "9",
    label: "Non-Fiction",
  },
  {
    value: "10",
    label: "Thriller",
  },
  {
    value: "11",
    label: "Mystery",
  },
  {
    value: "12",
    label: "Young Adult Fantasy",
  },
  {
    value: "13",
    label: "Post-Apocalyptic",
  },
  {
    value: "14",
    label: "Biography",
  },
  {
    value: "15",
    label: "Psychological Thriller",
  },
  {
    value: "16",
    label: "Philosophical Fiction",
  },
  {
    value: "17",
    label: "Speculative Fiction",
  },
  {
    value: "18",
    label: "Memoir",
  },
  {
    value: "19",
    label: "Epic Fantasy",
  },
  {
    value: "20",
    label: "Strategy/Philosophy",
  },
]

interface ComboboxProps {
  // value: string
  className?: string
  hideTypeAhead?: boolean
  onChange: (value: string) => void
}

export function Combobox({ className = "", hideTypeAhead = false, onChange }: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <div className={className}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[160px] justify-between"
          >
            {value ? ddItems.find((data) => data.value === value)?.label : "Genre"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[120px] p-0">
          <Command>
            {!hideTypeAhead && <CommandInput placeholder="Search..." />}
            <CommandList>
              <CommandEmpty>No data found.</CommandEmpty>
              <CommandGroup>
                {ddItems.map((data) => (
                  <CommandItem
                    key={data.value}
                    value={data.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                      onChange(data.label)
                      setOpen(false)
                    }}
                  >
                    {data.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
