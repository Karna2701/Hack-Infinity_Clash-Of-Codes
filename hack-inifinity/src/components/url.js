import React from 'react'
import { Textarea } from '@material-tailwind/react'
const url = () => {
  return (
      <div class="grid place-items-center p-10">
        <div className=' block w-full mt-2 px-16 py-2 border-gray-300 rounded-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'>
          <Textarea placeholder='Copy Your Url Here' />
        </div>

        <div>
          <h3 className='text-1xl'>OR</h3>
        </div>
      </div>
  )
}

export default url