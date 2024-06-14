import React from 'react';

function Rating({ image, name, designation, description,date }) {
  return (
    <div className='w-[250px] h-[350px] lg:w-[300px] lg:h-[400px]  rounded-2xl text-center p-6 mx-auto m-5 border-t-4 border-y-4 border-green-400 relative'style={{backgroundColor:"#ebeef2"}}>

        <div>
            <p className='text-xl mb-1'>
                {name}
            </p>
        </div>
        <div className='mt-1 md:mt-7 flex flex-wrap md:gap-7 items-center justify-center'>
           <div className=''>
                <img className='rounded-full w-12 h-12 mx-auto ' src={image} alt="na" />              
                <p>{designation}</p>
           </div>
           <div className=''>
                
                <p className='bg-white p-2  rounded-2xl font italic w-60 '>"{description}"</p>
                {/* <ChatBubbleIcon className=''/> */}
           </div>
           <p className='absolute bottom-4 font-light'>{date}</p>

        </div>
    </div>
  );
}

export default Rating;