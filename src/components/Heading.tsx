import type React from "react"
import { twMerge } from "tailwind-merge";


export const Heading = ({
    children, className, as = "h2",
} : {
    children : React.ReactNode;
    className ?: string,
    as ?: "h1" | "h2",
}) => {

    const Tag = as;
  return (
    <Tag className={twMerge("text-2xl md:text-4xl lg:text-6xl font-display font-bold tracking-tight", className)}>
        {children}
    </Tag>
  )
}
