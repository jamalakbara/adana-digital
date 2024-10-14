import Link from "next/link"
import { ReactNode } from "react"

const TextLink = ({ text, href }: { text: ReactNode, href: string }) => {
  return (
    <Link 
      className='text-white font-bold capitalize
      sm:text-xs
      md:text-base' 
      href={href ? href : '#'}
    >
      {text}
    </Link>
  )
}

export default TextLink