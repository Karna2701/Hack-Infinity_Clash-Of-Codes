import React from 'react'

const header = () => {
  return (
    <div className='flex justify-between bg-black'>
      <div className='flex-col text-justify'>

        <div className='flex justify-between'>
          <h1 className='text-black font-extrabold text-4xl mx-3 text-white'>
            FACE DETECTION
          </h1>
        </div>

        <div className='flex justify-between place-items-start text-white'>
          <h3 className='text-left mx-10 my-20 text-2xl'>
            Detect and locate human faces within an image,<br></br> and returns
            high-precision face bounding boxes.
            <br /> XYZ also returns the gender of the human in minimal time.
          </h3>
        </div>

        <div>
          <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded my-11 mx-10'>
            Start Free
          </button>
        </div>
      </div>

      <img
        className=''
        src='https://media.istockphoto.com/id/1166057711/vector/biometric-person-identification-facial-recognition-concept-futuristic-low-polygonal-human.jpg?s=612x612&w=0&k=20&c=bEePF402x94i0sHzgQ9kc8TSGb3jSs4DbeqIusyiIPM='
        alt='.'
      />
    </div>
  )
}

export default header
