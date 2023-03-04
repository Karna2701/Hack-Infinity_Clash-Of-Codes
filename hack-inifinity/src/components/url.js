import React from 'react'
import { Textarea } from '@material-tailwind/react'
const url = () => {
  return (
      <div class="grid place-items-center p-10">
        <div className='w-900 '>
          <Textarea placeholder='Copy Your Url Here' />
        </div>
      </div>
  )
}

export default url