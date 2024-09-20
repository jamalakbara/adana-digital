"use client"

import { Menu, X } from "lucide-react"
import Image from "next/image"
import logo_yellow_green from "@/public/assets/logo-yellow-green.svg"
import { useEffect, useState } from "react"
import { pages } from "@/lib/data"
import Link from "next/link"

export function NavbarDesktop({ className }: { className?: string }) {
  const [toggleNav, setToggleNav] = useState(false);
  const [y, setY] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    window.onscroll = () => {
      setY(window.scrollY);
    }
    if (y >= 2*window.innerHeight) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [y])

  return (
    <header id="NavbarDesktop" className={`sticky top-0 bg-transparent z-50 hidden lg:block ${className} transition-all ease-in-out duration-200`} style={{ opacity: visible ? 1 : 0 }}>
      <div className="absolute top-10 right-20 transition-all ease-in-out z-1000">
        <div className="flex flex-row gap-5 align-middle">
          <div
            className="flex flex-row gap-5 align-middle transition-all ease-in-out"
            style={{ transform: `translateY(.5rem) translateX(${toggleNav ? 3 : 9}rem) scale(${toggleNav ? 1 : 0})`}}
          >
            {pages.map((page) => (<Link className="font-semibold transition-all ease-in-out hover:opacity-50" key={page.url} href={page.url}>{page.title}</Link>))}
          </div>
          <X className="h-10 w-10 cursor-pointer transition-all ease-in-out hover:opacity-50" style={{ transform: `translateX(3.9rem) scale(${toggleNav ? 1 : 0})` }} onClick={() => setToggleNav(false)} />
          <Menu className="h-10 w-10 cursor-pointer transition-all ease-in-out hover:opacity-50" style={{ transform: `scale(${toggleNav ? 0 : 1})`}} onClick={() => setToggleNav(true)} />
        </div>
      </div>
      <div className="flex flex-row align-middle justify-center">
        <Image
          src={logo_yellow_green}
          alt=""
          width={100}
          className="lg:absolute lg:top-10 lg:left-20"
        />
      </div>
    </header>
  )
}