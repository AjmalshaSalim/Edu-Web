import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import { CircularProgress } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';
import sections_bg from '../Assets/sections_bg.png'
import school_bus from '../Assets/school_bus.png'
import design1 from '../Assets/design1.png'
import girl_drawing from '../Assets/girl_drawing.jpg'
import RatingSwiper from '../Components/RatingSwiper';
import ExpertTeachers from '../Components/ExpertTeachers';


function About() {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: .5,
  });


  
  return (
    <div className='overflow-x-hidden'>
   {/* about us */}
 <div className='flex-col' style={{ backgroundImage:`url(${sections_bg})`,height:"400px",backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:'center'}}>
    <h1 
    className='text-4xl md:text-6xl uppercase font-extrabold mb-2 md:mb-4 text-white ' style={{fontFamily:'cursive'}}>About Us
    </h1>
  
    <h1
    className='text-xl p-3 bg-yellow-600 rounded-xl text-white  'style={{fontFamily:'cursive'}}><b>Home - About us</b>
    </h1>
  </div>


{/* about content */}
  <div className='w-full bg-[#f2f6ff]'>

    <div className='w-full'>
      <h1 className='text-center font-serif text-4xl font-semibold pt-10 mb-4'><span className=' text-[#12265a]'>Welcome to our</span> <span className='text-pink-600'>Kindergarten</span></h1>
      <p className='mx-auto text-center text-[#777a83] mb-8 w-3/4'>Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. Moving in fourth air night bring upon lesser subdue fowl male signs.</p>
    </div>

    <div className='flex flex-wrap items-center justify-center gap-7 md:gap-20'>
      <div className='ms-10 md:ms-0'>

        <div className='flex items-center md:gap-5 gap-1 ms-3 md:ms-0 py-3'>
          
          <div className='w-16 h-16 rounded-full bg-blue-300 relative'><EmojiEventsIcon className='absolute top-2 left-2 ' style={{color:"white",fontSize:"45px"}}/></div>
          <div>
            <h1 className='text-2xl text-blue-300 font-bold mb-1'>
            Safe Enviroment</h1>
            <p className='text-[#0b162e] w-80 font-light leading-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
          </div>
        </div> 

        <div className='flex items-center md:gap-5 gap-1 ms-3 md:ms-0 py-3'>

          <div className='w-16 h-16 rounded-full bg-yellow-300 relative'><SchoolIcon className='absolute top-2 left-2 ' style={{color:"white",fontSize:"45px"}}/></div>
          <div>
            <h1 className='text-2xl text-yellow-300 font-bold mb-1'>Interactive Learning</h1>
            <p className='text-[#0b162e] w-80 font-light leading-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
          </div>
        </div>

        <div className='flex items-center md:gap-5 gap-1 ms-3 md:ms-0 py-3'>
          
          <div className='w-16 h-16 rounded-full bg-pink-300 relative'><PersonIcon className='absolute top-2 left-2.5 ' style={{color:"white",fontSize:"45px"}}/></div>
          <div>
            <h1 className='text-2xl text-pink-300 font-bold mb-1'>Experienced Educators</h1>
            <p className='text-[#0b162e] w-80 font-light leading-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
          </div>
        </div>

      </div>
      <div>
        <img className='w-[400px]' src={school_bus} alt="" srcset="" />
      </div>
    </div>
    <svg
      id="wave"
      style={{ transform: 'rotate(0deg)', transition: '0.3s' }}
      viewBox="0 0 1440 96"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop stopColor="rgba(209.931, 186.242, 218.941, 1)" offset="0%"></stop>
          <stop stopColor="rgba(121.302, 125.902, 205.281, 1)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        style={{ transform: 'translate(0, 0px)', opacity: 1 }}
        fill="url(#sw-gradient-0)"
        d="M0,40L12.6,40C25.3,40,51,40,76,43.3C101.1,47,126,53,152,61.7C176.8,70,202,80,227,80C252.6,80,278,70,303,65C328.4,60,354,60,379,55C404.2,50,429,40,455,40C480,40,505,50,531,60C555.8,70,581,80,606,75C631.6,70,657,50,682,43.3C707.4,37,733,43,758,43.3C783.2,43,808,37,834,40C858.9,43,884,57,909,60C934.7,63,960,57,985,46.7C1010.5,37,1036,23,1061,21.7C1086.3,20,1112,30,1137,33.3C1162.1,37,1187,33,1213,38.3C1237.9,43,1263,57,1288,65C1313.7,73,1339,77,1364,65C1389.5,53,1415,27,1440,28.3C1465.3,30,1491,60,1516,71.7C1541.1,83,1566,77,1592,76.7C1616.8,77,1642,83,1667,85C1692.6,87,1718,83,1743,68.3C1768.4,53,1794,27,1806,13.3L1818.9,0L1818.9,100L1806.3,100C1793.7,100,1768,100,1743,100C1717.9,100,1693,100,1667,100C1642.1,100,1617,100,1592,100C1566.3,100,1541,100,1516,100C1490.5,100,1465,100,1440,100C1414.7,100,1389,100,1364,100C1338.9,100,1314,100,1288,100C1263.2,100,1238,100,1213,100C1187.4,100,1162,100,1137,100C1111.6,100,1086,100,1061,100C1035.8,100,1011,100,985,100C960,100,935,100,909,100C884.2,100,859,100,834,100C808.4,100,783,100,758,100C732.6,100,707,100,682,100C656.8,100,632,100,606,100C581.1,100,556,100,531,100C505.3,100,480,100,455,100C429.5,100,404,100,379,100C353.7,100,328,100,303,100C277.9,100,253,100,227,100C202.1,100,177,100,152,100C126.3,100,101,100,76,100C50.5,100,25,100,13,100L0,100Z"
      ></path>
    </svg>
  </div>


{/* progress bar */}
  <div 
    
        ref={ref} 
        className='w-full p-8 md:p-4 text-white font-medium text-center flex flex-wrap items-center justify-evenly' style={{backgroundColor:'rgba(209.931, 186.242, 218.941, 1)'}}
      >
        
        <div className='w-full sm:w-1/2 md:w-1/4 p-2 m-2 md:m-0'>
          <div className='mx-auto rounded-full  relative flex items-center justify-center' style={{backgroundColor:"lightskyblue",height:"150px",width:"150px"}}>
            <CircularProgress duration={4} variant="determinate" value={inView ? 100 : 0} size={170} thickness={3} style={{ position: 'absolute', color: 'lavender'}} className='rounded-full shadow-2xl'/>
            <div className='absolute flex flex-col items-center'>
              <MilitaryTechIcon style={{color:"white"}}/>
              <p className='text-5xl'>
                {inView && <CountUp className='fontapply font-semibold ' end={20} duration={4} />}
              </p>
              <p className='font-light' style={{fontSize:"12px"}}>Years of <br />Excellence</p>
            </div>
          </div>
        </div>
  
        <div className='w-full sm:w-1/2 md:w-1/4 p-2 m-2 md:m-0'>
          <div className='mx-auto rounded-full  relative flex items-center justify-center' style={{backgroundColor:"lightskyblue",height:"150px",width:"150px"}}>
            <CircularProgress variant="determinate" value={inView ? 100 : 0} size={170} thickness={3} style={{ position: 'absolute', color: 'lavender'  }}  className='rounded-full shadow-2xl'/>
            <div className='absolute flex flex-col items-center'>
              <SchoolIcon style={{color:"white"}}/>
              <p className='text-5xl'>
              {inView && <CountUp className='fontapply font-semibold' end={50} duration={4} />}
              </p>
              <p className='font-light' style={{fontSize:"12px"}}>Qualified <br /> Teachers </p>
            </div>
          </div>
        </div>
  
        <div className='w-full sm:w-1/2 md:w-1/4 p-2 m-2 md:m-0'>
          <div className='mx-auto rounded-full  relative flex items-center justify-center' style={{backgroundColor:"lightskyblue",height:"150px",width:"150px"}}>
            <CircularProgress variant="determinate" value={inView ? 100 : 0} size={170} thickness={3} style={{ position: 'absolute', color: 'lavender'}}  className='rounded-full shadow-2xl'/>
            <div className='absolute flex flex-col items-center'>
              <PersonIcon style={{color:"white"}}/>
              <p className='text-5xl'>
              {inView && <CountUp className='fontapply font-semibold' end={500} duration={4} />}
              </p>
              <p className='font-light' style={{fontSize:"12px"}}>Students <br /> Enrolled</p>
            </div>
          </div>
        </div>
  
        <div className='w-full sm:w-1/2 md:w-1/4 p-2 m-2 md:m-0'>
          <div className='mx-auto rounded-full relative flex items-center justify-center' style={{backgroundColor:"lightskyblue",height:"150px",width:"150px"}}>
            <CircularProgress variant="determinate" value={inView ? 100 : 0} size={170} thickness={3} style={{ position: 'absolute', color: 'lavender'  }} className='rounded-full shadow-2xl' />
            <div className='absolute flex flex-col items-center'>
              <EmojiEventsIcon style={{color:"white"}}/>
              <p className='text-5xl'>
              {inView && <CountUp className='fontapply font-semibold' end={15} duration={4} />}
              </p>
              <p className='font-light' style={{fontSize:"12px"}}>Total <br /> Award</p>
            </div>
          </div>
        </div>
  
        
  </div>


{/* about content 2 */}
  <div style={{backgroundColor:"white"}}>

    <svg 
      id="wave" 
      style={{ transform: "rotate(180deg)", transition: "0.3s" }} 
      viewBox="0 0 1440 96" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop stopColor="rgba(209.931, 186.242, 218.941, 1)" offset="0%"></stop>
          <stop stopColor="rgba(121.302, 125.902, 205.281, 1)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path 
        style={{ transform: "translate(0, 0px)", opacity: 1 }} 
        fill="url(#sw-gradient-0)" 
        d="M0,40L12.6,48.3C25.3,57,51,73,76,71.7C101.1,70,126,50,152,50C176.8,50,202,70,227,76.7C252.6,83,278,77,303,75C328.4,73,354,77,379,76.7C404.2,77,429,73,455,70C480,67,505,63,531,63.3C555.8,63,581,67,606,70C631.6,73,657,77,682,78.3C707.4,80,733,80,758,71.7C783.2,63,808,47,834,40C858.9,33,884,37,909,40C934.7,43,960,47,985,40C1010.5,33,1036,17,1061,20C1086.3,23,1112,47,1137,60C1162.1,73,1187,77,1213,76.7C1237.9,77,1263,73,1288,70C1313.7,67,1339,63,1364,66.7C1389.5,70,1415,80,1440,70C1465.3,60,1491,30,1516,15C1541.1,0,1566,0,1592,6.7C1616.8,13,1642,27,1667,31.7C1692.6,37,1718,33,1743,26.7C1768.4,20,1794,10,1806,5L1818.9,0L1818.9,100L1806.3,100C1793.7,100,1768,100,1743,100C1717.9,100,1693,100,1667,100C1642.1,100,1617,100,1592,100C1566.3,100,1541,100,1516,100C1490.5,100,1465,100,1440,100C1414.7,100,1389,100,1364,100C1338.9,100,1314,100,1288,100C1263.2,100,1238,100,1213,100C1187.4,100,1162,100,1137,100C1111.6,100,1086,100,1061,100C1035.8,100,1011,100,985,100C960,100,935,100,909,100C884.2,100,859,100,834,100C808.4,100,783,100,758,100C732.6,100,707,100,682,100C656.8,100,632,100,606,100C581.1,100,556,100,531,100C505.3,100,480,100,455,100C429.5,100,404,100,379,100C353.7,100,328,100,303,100C277.9,100,253,100,227,100C202.1,100,177,100,152,100C126.3,100,101,100,76,100C50.5,100,25,100,13,100L0,100Z"
      />
    </svg>

<div className='flex flex-wrap w-full  items-center px-4 mb-6 md:mt-0 md:px-16 bg-' >
       <div className="md:w-1/2 ">
          <img 
              className="" 
              src={girl_drawing}
              alt="About"
          />
       </div>
  
       <div className='md:w-1/2 p-5 text-center col  border-l-4  border-b-4 border-red-500 pb-8 py-10 border-dashed rounded-3xl bg-slate-100' >
         <h1 className=' text-center sm:text-left text-3xl pb-5   text-[#12265a] font-semibold font-serif'>We Learn Smart Way To Build Bright Futute For Your Children</h1>
         <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         <br /><br />
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         </p>
       </div>
</div>
<div className='w-full'><img src={design1} alt="" /></div>

     
 </div>

 {/* exprt teachers */}
<ExpertTeachers/>


{/* rating */}
  <RatingSwiper/>
 
</div>

  )}
export default About