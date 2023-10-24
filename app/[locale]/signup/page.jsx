import React from 'react'
import Signup from './Signup'
import { company_name } from '@/app/config/config';

export const metadata = {
  title: `SignUp | ${company_name}`,
};

const page = () => {
  return (
    <div>
      <Signup />
    </div>
  )
}

export default page