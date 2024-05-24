import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ReUsableButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function ReUsableButton({
  children,
  className,
  ...props
}: ReUsableButton) {
  return (
    <>
      <button
        className={twMerge(
          "text-[#fff] text-lg py-2 px-4 bg-blackBackground border-2 w-fit rounded-md hover:bg-prod ease-in-out duration-100 shadow-md shadow-[#000000] focus:outline-none focus:ring-1 focus:ring-prod",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
