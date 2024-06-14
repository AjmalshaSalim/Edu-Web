import React from 'react'
import Card2 from '../Components/Card2';



function ExpertTeachers() {
  return (
    <div>
         <div className='md:px-36 px-10'>
  <div className='flex flex-col justify-center items-center'>
    <h1 className=' text-center sm:text-left text-4xl mb-5 mt-9 text-[#12265a] font-semibold font-serif'>Expert Teacher</h1>
    <p className="text-[#777a83] px-36 text-center mb-10 hidden lg:block">Expert teachers possess a deep understanding of their subject matter and pedagogy, allowing them to effectively communicate complex concepts to students. They are adept at identifying individual student needs and tailoring their teaching strategies accordingly.</p>
    </div>
  <Card2/>
  </div>
    </div>
  )
}

export default ExpertTeachers