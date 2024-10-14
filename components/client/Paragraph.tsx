import React, { ReactNode } from 'react'

const Paragraph = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <p
      className={`text-white font-sans
      sm:text-xs
      md:text-lg ${className}`}
    >{children}</p>
  )
}

export default Paragraph