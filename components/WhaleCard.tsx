import React from 'react'
import { Card, CardHeader, CardFooter, CardContent } from './ui/card'
import { Input } from './ui/input'
import Image from 'next/image'
import { WhaleCardProps } from '@/types'



const WhaleCard:React.FC<WhaleCardProps> = ({
  iconUrl,action,content,footer
}) => {
  return (
    <Card className='w-56'>
      <CardHeader className='flex flex-row justify-between items-start font-medium p-[14px] relative'>
        <Image src={iconUrl} priority width={32} height={32} className=' object-left' alt="bell"/>
        {
          action && action==='save' ? <p className='font-semibold text-xs'>Save</p>: <Image src="/icons/Checkmark.svg" className='object-top' alt='checkmark' width={18} height={18}/>
        }
      </CardHeader>
      <CardContent className='p-[14px] pb-0'>
        {content}
      </CardContent>
      <CardFooter className='p-[14px]'>
        {footer}
    </CardFooter>
    </Card>
  )
}

export default WhaleCard