import React from 'react'
import resume from '../resume/Dipesh Resumedocx.pdf'

const Contact = () => {
  return (
    <div className='text-white bg-neutral-800 flex justify-center items-center'>
      <h1 className='text-5xl p-5 md:p-10 md:text-8xl montSerratBold md:leading-35 uppercase text-center'>
        you can get in touch with me via <span className='text-green-600'>mail</span> or <span className='text-red-400'>instagram</span> or <span className='text-blue-500'>linkedin</span>.
      </h1>
      
      {/* <a href={resume} download='Myresume.pdf'>download</a> */}
    </div>
  )
}

export default Contact