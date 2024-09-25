"use client"

import React, { ReactNode } from 'react'
import { Card } from '../ui/card'

export const ServiceCard = ({ key, title, className, style }: { key?: string | number, title: ReactNode, className?: string, style?: { [key: string]: string | number } }) => {
  return (
    <div key={key}>
      <Card
        style={style || {}}
        className={`flex flex-col align-middle justify-center rounded-sm transition-all ease-in-out font-semibold text-white bg-[#527D38] hover:text-[#527D38] hover:bg-[#EEFF01] cursor-pointer ${className}`}
      >
        <div className="text-center ">{title}</div>
      </Card>
    </div>
  )
}
