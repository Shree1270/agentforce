import { cva } from "class-variance-authority";
import type { HTMLAttributes } from "react";

export type ButtonProps = {
    variant : "primary" | "secondary"
    className ?: string
} & HTMLAttributes<HTMLButtonElement>
 
const classes = cva("text-sm rounded-xl font-medium py-2 px-4 tracking-widest cursor-pointer", {
  variants: {
    variant: {
      primary: "bg-background hover:bg-gray-300/20 transition duration-300",
      secondary: "bg-foreground hover:shadow-brand",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export const Button = (props : ButtonProps) =>{

    const {className = "", children, ...otherProps} = props;
    return (
        <button className={classes({className, ...otherProps})}>
            {children}
        </button>
    )
}