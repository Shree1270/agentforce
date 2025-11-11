import type React from "react"
import { twMerge } from "tailwind-merge";


export const Subheading = ({
    children, className, as = "p",
} : {
    children : React.ReactNode;
    className ?: string,
    as ?: "h1" | "h2" | "p",
}) => {

    const Tag = as;
  return (
    <Tag className={twMerge("text-base md:text-lg text-neutral-400 font-inter max-w-xl", className)}>
        {children}
    </Tag>
  )
}
