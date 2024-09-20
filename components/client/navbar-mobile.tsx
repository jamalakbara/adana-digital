"use client"

import { Menu } from "lucide-react"
import Image from "next/image"
import logo_yellow_green from "@/public/assets/logo-yellow-green.svg"
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from "../ui/drawer"
import { useState } from "react"
import { pages } from "@/lib/data"
import Link from "next/link"

export function NavbarMobile({ className }: { className?: string }) {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <header id="NavbarMobile" className={`sticky top-0 bg-transparent z-50 w-screen block lg:hidden ${className}`}>
      <div className="absolute top-5 right-5 transition-all ease-in-out hover:opacity-50 z-1000">
        <Drawer direction="left" open={toggleNav}>
          <DrawerTrigger asChild>
            <Menu className="h-10 w-10 cursor-pointer" onClick={() => setToggleNav(true)} />
          </DrawerTrigger>
          <DrawerContent className="h-screen w-screen bg-white" onClick={() => setToggleNav(false)}>
            <DrawerHeader className="hidden"></DrawerHeader>
            <div className="h-[75vh] flex flex-col justify-center gap-8 m-5">
              {pages.map((page) => (
                <Link className="text-xl font-semibold transition-all ease-in-out border-b-2 hover:opacity-50" key={page.url} href={page.url}>{page.title}</Link>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="flex flex-row align-middle justify-start mx-2">
        <Image
          src={logo_yellow_green}
          alt=""
          width={70}
          className="lg:absolute lg:top-10 lg:left-20"
        />
      </div>
    </header>
  )
}