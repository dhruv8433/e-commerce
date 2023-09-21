import { company_name } from '@/app/config/config'
import React from 'react'

export const metadata = {
  title: `Provider | ${company_name}` 
}

const page = () => {
  return (
    <div className='items-center h-screen flex justify-center'>
        Providers
    </div>
  )
}

export default page