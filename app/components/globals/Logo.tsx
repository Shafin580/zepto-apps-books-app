"use client"

import { cn } from "@/libs/utils"
import { memo } from "react"
import { useTheme } from "next-themes"

interface LogoProps {
  size?: string | "desktop" | "mobile"
  className?: string
}

export default memo(function Logo({ size = "desktop", className }: LogoProps) {
  const { setTheme, theme } = useTheme()
  return (
    <>
      <p>Books Library</p>
    </>
  )
})
