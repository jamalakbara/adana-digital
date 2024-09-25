"use client"

import { MoveDown } from 'lucide-react'
import React from 'react'

export const MoveDownArrow = ({ className }: { className?: string }) => {
  return (
    <MoveDown className={`h-10 w-8 cursor-pointer transition-all ease-in-out hover:text-[#EEFF01] ${className}`} onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}/>
  )
}
