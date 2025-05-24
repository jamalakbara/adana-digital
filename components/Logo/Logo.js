import Image from "next/image"
import Link from "next/link"

const Logo = ({className}) => {
  return (
    <Link className={`${className?className:''}`} href="/">
      <figure>
        <Image
          src="/img/adana-logo-green-outline.svg"
          alt="Bahana Logo"
          width={50}
          height={50}
        />
      </figure>
    </Link>
  )
}

export default Logo