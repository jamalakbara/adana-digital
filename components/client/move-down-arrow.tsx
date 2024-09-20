"use client"

import { MoveDown } from 'lucide-react'
import React from 'react'

export const MoveDownArrow = () => {
  return (
    <MoveDown className="h-10 w-8 cursor-pointer transition-all ease-in-out hover:text-[#5D93AD]" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}/>
  )
}
