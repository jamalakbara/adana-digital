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
    <header id="NavbarDesktop" className={`sticky top-0 bg-transparent z-50 hidden lg:${visible ? "block" : "hidden"} ${className}`}>
      <div className="absolute top-10 right-20 transition-all ease-in-out z-1000">
        {toggleNav ? (
          <div className="flex flex-row gap-5 align-middle">
            <div className="flex flex-row gap-5 align-middle translate-y-2">
              {pages.map((page) => (<Link className="font-semibold transition-all ease-in-out hover:opacity-50" key={page.url} href={page.url}>{page.title}</Link>))}
            </div>
            <X className="h-10 w-10 cursor-pointer transition-all ease-in-out hover:opacity-50" onClick={() => setToggleNav(false)} />
          </div>
        ) : (
          <Menu className="h-10 w-10 cursor-pointer transition-all ease-in-out hover:opacity-50" onClick={() => setToggleNav(true)} />
        )}
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