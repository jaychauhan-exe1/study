import React from 'react'
import { FaCheck } from "react-icons/fa";

interface Props {
  children?: React.ReactNode
}

export const List = ({ children }: Props) => {
  return (
    <ul className="mt-10">
      {React.Children.map(children, (child) => (
        <li className="flex items-center gap-2 text-xl mb-2 text-zinc-700 dark:text-zinc-300">
          <FaCheck />
          {child}
        </li>

      ))}
    </ul>
  )
}
