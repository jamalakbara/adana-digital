import Image from "next/image"
import Link from "next/link"

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link className={`${className?className:''}`} href="/">
      <figure>
        <Image
          src="/assets/adana-logo-green-outline.svg"
          alt="Adana Logo"
          width={50}
          height={50}
        />
      </figure>
    </Link>
  )
}

export default Logo