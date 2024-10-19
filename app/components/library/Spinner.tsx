import { memo } from "react"
import { cn } from "tailwind-cn"

export interface SpinnerProps {
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "neutral"
  size?: "sm" | "md" | "lg" | "xl" | "2xl"
  trackColor?: "white" | "light" | "dark"
  spinnerText?: string
  containerClassName?: string
  className?: string
}

/**
 * Spinner Component
 *
@property {string} variant Button color variant: primary, secondary, success, warning, danger, info
@property {string} size Use numeric values
@property {string} trackColor Choose between 'light' and 'dark'
@param {string} spinnerText Text of the spinner component
@property {string} containerClassName Additional classes for the parent container of the component
@property {string} className Additional classes to add to SVG element
 */

const Spinner = memo(function Spinner({
  variant = "primary",
  size = "md",
  trackColor = "light",
  spinnerText = "",
  containerClassName,
  className,
}: SpinnerProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center", containerClassName)}>
      <svg
        className={cn("pointer-events-none mr-4 aspect-square animate-spin dark:text-gray-600", {
          // Variants
          "fill-primary-400": variant == "primary",
          "fill-secondary-400": variant == "secondary",
          "fill-green-400": variant == "success",
          "fill-rose-400": variant == "danger",
          "fill-amber-400": variant == "warning",
          "fill-sky-400": variant == "info",
          "fill-slate-400": variant == "neutral",
          // Size
          "w-14": size === "sm",
          "w-[18px]": size === "md",
          "w-24": size === "lg",
          "w-32": size === "xl",
          "w-36": size === "2xl",
          // Track Color
          "text-slate-200 dark:text-slate-600": trackColor == "light",
          "text-slate-600 dark:text-slate-400": trackColor == "dark",
          "text-white dark:text-slate-400": trackColor == "white",
          className,
        })}
        role="status"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      {spinnerText && (
        <div className="mt-16 text-lg text-primary-500 transition-all">
          {spinnerText}
          <span className="space-x-2 pl-1">
            <span className="ml-2 animate-pulse font-bold">.</span>
            <span className="ml-1 animate-[pulse_1s_ease-in-out_infinite] font-bold">.</span>
            <span className="ml-1 animate-[pulse_1s_ease-in-out_0.33s_infinite] font-bold">.</span>
          </span>
        </div>
      )}
    </div>
  )
})
export default Spinner
