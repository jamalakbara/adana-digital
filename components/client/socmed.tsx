"use client"

import { Facebook, Instagram, Linkedin } from 'lucide-react'
import React from 'react'

export const Socmed = () => {
  return (
    <div className="flex flex-row align-middle justify-center gap-4">
      <Facebook className="transition-all ease-in-out cursor-pointer hover:opacity-70 w-[50px] h-[50px]" onClick={() => window.open("https://google.com")} />
      <Instagram className="transition-all ease-in-out cursor-pointer hover:opacity-70 w-[50px] h-[50px]" onClick={() => window.open("https://google.com")} />
      <Linkedin className="transition-all ease-in-out cursor-pointer hover:opacity-70 w-[50px] h-[50px]" onClick={() => window.open("https://google.com")} />
    </div>
  )
}
