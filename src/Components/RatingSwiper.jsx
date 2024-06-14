import React, { useEffect, useState } from 'react';
import Rating from '../Components/Rating';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import shape_bg from '../Assets/shape_bg.png'
import AxiosInstance from '../Api/AxiosInstance';


function RatingSwiper() {

    // const ratingData = [
    //     { 
    //       rating: 5, 
    //       review: 'Great service!', 
    //       user: 'User 1', 
    //       location: 'Germany', 
    //       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmHWOrhVKm7uFEO5hu3PkWEes7agIDe2gbA&s',
    //       description: 'The service exceeded my expectations. Highly professional and efficient.'
    //     },
    //     { 
    //       rating: 4, 
    //       review: 'Very satisfied!', 
    //       user: 'User 2', 
    //       location: 'USA', 
    //       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmHWOrhVKm7uFEO5hu3PkWEes7agIDe2gbA&s',
    //       description: 'Good experience overall. Prompt service and friendly staff.'
    //     },
    //     { 
    //       rating: 3, 
    //       review: 'Good', 
    //       user: 'User 3', 
    //       location: 'UK', 
    //       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmHWOrhVKm7uFEO5hu3PkWEes7agIDe2gbA&s',
    //       description: 'The service was decent, though there is room for improvement in some areas.'
    //     },
    //     { 
    //       rating: 5, 
    //       review: 'Excellent!', 
    //       user: 'User 4', 
    //       location: 'France', 
    //       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmHWOrhVKm7uFEO5hu3PkWEes7agIDe2gbA&s',
    //       description: 'Absolutely outstanding service! I would definitely recommend it to others.'
    //     },
    //     { 
    //       rating: 4, 
    //       review: 'Very good!', 
    //       user: 'User 5', 
    //       location: 'Italy', 
    //       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmHWOrhVKm7uFEO5hu3PkWEes7agIDe2gbA&s',
    //       description: 'Very happy with the service. The team was professional and courteous.'
    //     },
    //     { 
    //       rating: 3, 
    //       review: 'Satisfied.', 
    //       user: 'User 6', 
    //       location: 'Spain', 
    //       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmHWOrhVKm7uFEO5hu3PkWEes7agIDe2gbA&s',
    //       description: 'An average experience. The service was satisfactory but not exceptional.'
    //     },
    //     { 
    //       rating: 4, 
    //       review: 'Very Good', 
    //       user: 'User 7', 
    //       location: 'Netherlands', 
    //       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmHWOrhVKm7uFEO5hu3PkWEes7agIDe2gbA&s',
    //       description: 'Phenomenal service! I am extremely pleased and will use it again.'
    //     },
    //     { 
    //       rating: 4, 
    //       review: 'Good job!', 
    //       user: 'User 8', 
    //       location: 'Belgium', 
    //       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmHWOrhVKm7uFEO5hu3PkWEes7agIDe2gbA&s',
    //       description: 'Great job by the team. I am very satisfied with the outcome.'
    //     },
    //   ];

      
const [data, setData] = useState([]);

 useEffect(() => {
    const fetchEvents = async () => {
        try {
            const response = await AxiosInstance.get('/testmonials');
            console.log(response.data.partners); 
            setData(response.data.partners);
        } catch (error) {
            console.error(error);
        }
    };
    
    fetchEvents();
  }, []);

  return (
    <div>

<div className='mt-9 px-6 ' style={{backgroundImage:`url(${shape_bg})`}}>

  <h1 className='text-center capitalize text-4xl text-[#12265a] font-semibold font-serif'>parents are saying</h1>
    <Swiper
      modules={[Autoplay]}
      spaceBetween={37}
      autoplay={{ delay: 2000 }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {data.map((data, index) => (
        <SwiperSlide key={index}>
          <Rating
            image={data.image}
            name={data.name}
            designation={data.designation}
            description={data.description}
            date={data.date}
          />
        </SwiperSlide>
      ))}
    </Swiper>
   
</div>
    

    </div>
  )
}

export default RatingSwiper