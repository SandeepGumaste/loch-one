import React from 'react'
import { Card } from './ui/card'
import { TestimonialCardProps } from '@/types'




const TestimonialCard:React.FC<TestimonialCardProps> = ({
    name,designation,review
}) => {
  return (
    <Card key={name} className={`${review.length<=112?'bg-white shadow rounded-lg p-5 md:w-[360px]':'bg-white shadow min-w-max rounded-lg p-5'}`}>

                  <p className="text-base font-semibold pb-5">
                  {name}
                    <span className="text-gray-400 text-sm font-medium tracking-normal pl-2">
                      {designation}
                    </span>
                  </p>
                  <p className="text-base  font-medium text-[#1D2129]">
                    “{review}”
                  </p>
              </Card>
  )
}

export default TestimonialCard