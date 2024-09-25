"use client"

import React from 'react'

export const LetsDiscussText = ({ className }: { className?: string }) => {
  return (
    <span className={`cursor-pointer transition-all ease-in-out hover:text-[#5D93AD] ${className}`} onClick={() => alert("let's discuss")}>Let&apos;s Discuss</span>
  )
}
