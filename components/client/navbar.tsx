"use client"

import { Menu, X } from "lucide-react"
import Image from "next/image"
// import logo_yellow_green from "@/public/assets/logo-yellow-green.svg"
import logo_outline from "@/public/assets/adana-logo-green-outline.svg"
import { useEffect, useState } from "react"
import { pages } from "@/lib/data"
import Link from "next/link"
import useIsMobile from "@/hooks/useIsMobile"
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from "../ui/drawer"

export function Navbar({ className }: { className?: string }) {
  const { isMobile } = useIsMobile();

  const [toggleNav, setToggleNav] = useState(false);
  const [y, setY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuColor, setMenuColor] = useState("black");
  useEffect(() => {
    window.onscroll = () => {
      setY(window.scrollY);
    }
    if (y >= 1*window.innerHeight) {
      setMenuColor("black");
    } else {
      setMenuColor("black");
    }
    if (y >= 2*window.innerHeight) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [y])

  if (isMobile) return (
    <header id="NavbarMobile" className={`sticky top-10 h-0 bg-transparent z-50 w-screen block lg:hidden transition-all ease-in-out ${className}`} style={{ opacity: visible ? 1 : 0 }}>
      <div className="absolute top-5 right-5 transition-all ease-in-out hover:opacity-50 z-1000">
        <Drawer direction="left" open={toggleNav}>
          <DrawerTrigger asChild>
            <Menu className="h-10 w-10 cursor-pointer" color={menuColor} onClick={() => setToggleNav(true)} />
          </DrawerTrigger>
          <DrawerContent className="h-screen w-screen bg-white">
            <DrawerHeader className="relative">
              <X className="absolute top-10 right-10 h-10 w-10 cursor-pointer transition-all ease-in-out hover:opacity-50" onClick={() => setToggleNav(false)} />
            </DrawerHeader>
            <div className="h-[75vh] flex flex-col justify-center gap-8 m-5">
              {pages.map((page) => (
                <Link className="text-xl font-semibold transition-all ease-in-out border-b-2 hover:opacity-50" key={page.url} href={page.url} onClick={() => setToggleNav(false)}>{page.title}</Link>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="flex flex-row align-middle justify-start mx-2">
        <Image
          src={logo_outline}
          alt=""
          width={50}
          className="lg:absolute lg:top-10 lg:left-20"
        />
      </div>
    </header>
  );

  return (
    <header id="NavbarDesktop" className={`sticky top-0 bg-transparent z-50 hidden lg:block ${className} transition-all ease-in-out duration-200`} style={{ opacity: visible ? 1 : 0 }}>
      <div className="absolute top-10 right-20 transition-all ease-in-out z-100">
        <div className="flex flex-row gap-5 align-middle">
          <div
            className="flex flex-row gap-5 align-middle transition-all ease-in-out"
            style={{ transform: `translateY(.5rem) translateX(${toggleNav ? 3 : 9}rem) scale(${toggleNav ? 1 : 0})`}}
          >
            {pages.map((page) => (<Link className="font-semibold transition-all ease-in-out hover:opacity-50" style={{ color: menuColor }} key={page.url} href={page.url} scroll>{page.title}</Link>))}
          </div>
          <X
            className="h-10 w-10 cursor-pointer transition-all ease-in-out hover:opacity-50"
            color={menuColor}
            style={{ transform: `translateX(3.9rem) scale(${toggleNav ? 1 : 0})` }}
            onClick={() => setToggleNav(false)}
            onMouseEnter={() => console.log(menuColor)}
          />
          <Menu
            className="h-10 w-10 cursor-pointer transition-all ease-in-out hover:opacity-50"
            color={menuColor}
            style={{ transform: `scale(${toggleNav ? 0 : 1})`}}
            onClick={() => setToggleNav(true)}
            onMouseEnter={() => console.log(menuColor)}
          />
        </div>
      </div>
      <div className="flex flex-row align-middle justify-center">
        <Image
          src={logo_outline}
          alt=""
          width={70}
          className="lg:absolute lg:top-10 lg:left-20"
        />
      </div>
    </header>
  )
}