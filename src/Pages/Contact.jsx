import React from 'react'
import sections_bg from '../Assets/sections_bg.png'


function Contact() {
  return (
    <div className='overflow-x-hidden'>
<div className='flex-col' style={{ backgroundImage:` url(${sections_bg})`,height:"400px",backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:'center'}}>
 
 <h1 
  className='text-4xl md:text-6xl uppercase font-extrabold mb-2 md:mb-4 text-white ' style={{fontFamily:'cursive'}}>contact
  </h1>

  <h1
  className='text-xl p-3 bg-yellow-600 rounded-xl text-white  'style={{fontFamily:'cursive'}}><b>Home - Contact</b>
  </h1>
  </div>


<div className='bg-slate-100'>
  <h1 className='capitalize text-4xl text-[#12265a] font-serif font-semibold text-center pt-10'>contact our <span className='text-pink-600'>kindergarden</span></h1>
   
  <form className=' row flex flex-wrap items-center lg:px-15 px-10'>
  
      <div className='col-lg-3 lg:px-20 p-5'>
          <div className='pb-5 pt-5'>
          <h1 className='text-2xl font-semibold text-[#12265a] '>Our Locations</h1>
          <p>TGRA-38, Tagore Gardens, Kumarapuram,<br /> Medical College P.O., Thiruvananthapuram-695011</p>
          </div>
          <div className='pb-5'>
          <h1 className='text-2xl font-semibold  text-[#12265a] '>Phone Number</h1>
          <p>7736965145 | 8086029291</p>
          </div>
          <div className='pb-5'>
          <h1 className='text-2xl font-semibold  text-[#12265a] '>Email Address</h1>
          <p>nfo@Hellokidslavender.com</p></div>
      </div>
      <div className='col-lg-9 lg:p-20 p-5'>
  
         <div className='row pb-5'> 
         <input className='w-full m-1 p-2 rounded-xl outline-none' type="text" placeholder='Name'/>
         </div>
  
        <div className='row pb-5'> 
              <input className='m-1 p-2 rounded-xl outline-none' type="text" placeholder='Phone'/>
              <input className='mt-5 m-1 p-2 rounded-xl outline-none' type="text" placeholder='Email'/>
        </div>
  
         <div>
              <textarea className='w-full m-1 p-2 rounded-xl outline-none' name="" id="" placeholder='Message'></textarea>
         </div>
         <button className='p-3 mt-5 m-1 rounded-xl ' style={{backgroundColor:"purple",color:"white",fontSize:"15px"}}><b>Send Message</b></button>
  
      </div>
  </form>
</div>

<div>

<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.4921693882093!2d76.87479683922123!3d8.548579991530245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bf9bca82635f%3A0x72d8ed7960ffc184!2sTechnopark%20Phase%203!5e0!3m2!1sen!2sin!4v1716787309117!5m2!1sen!2sin' style={{height:"500px", border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full'/>
</div>

    </div>
  )
}

export default Contact