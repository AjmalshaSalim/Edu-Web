import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AxiosInstance from '../Api/AxiosInstance';

// const dummyData = [
//     {
//       id: 1,
//       imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       title: 'Mathematics Class',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
//       author: 'Mona George',
//       authorImageUrl: 'https://picsum.photos/200/300',
//     },
//     {
//       id: 2,
//       imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       title: 'Science Class',
//       description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//       author: 'John Doe',
//       authorImageUrl: 'https://picsum.photos/200/300',
//     },
//     {
//       id: 3,
//       imageUrl: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       title: 'Mathematics Class',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
//       author: 'Mona George',
//       authorImageUrl: 'https://picsum.photos/200/300',
//     },
//     {
//       id: 4,
//       imageUrl: 'https://images.pexels.com/photos/5428155/pexels-photo-5428155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       title: 'Mathematics Class',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
//       author: 'Mona George',
//       authorImageUrl: 'https://picsum.photos/200/300',
//     },
//     {
//       id: 5,
//       imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       title: 'Mathematics Class',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
//       author: 'Mona George',
//       authorImageUrl: 'https://picsum.photos/200/300',
//     },
//     {
//       id: 6,
//       imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       title: 'Science Class',
//       description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//       author: 'John Doe',
//       authorImageUrl: 'https://picsum.photos/200/300',
//     },
//     {
//       id: 7,
//       imageUrl: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       title: 'Mathematics Class',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
//       author: 'Mona George',
//       authorImageUrl: 'https://picsum.photos/200/300',
//     },
//     {
//       id: 8,
//       imageUrl: 'https://images.pexels.com/photos/5428155/pexels-photo-5428155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       title: 'Mathematics Class',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
//       author: 'Mona George',
//       authorImageUrl: 'https://picsum.photos/200/300',
//     },
//     {
//       id: 9,
//       imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       title: 'Mathematics Class',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
//       author: 'Mona George',
//       authorImageUrl: 'https://picsum.photos/200/300',
//     },
//     {
//       id: 10,
//       imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       title: 'Science Class',
//       description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//       author: 'John Doe',
//       authorImageUrl: 'https://picsum.photos/200/300',
//     },
//     {
//       id: 11,
//       imageUrl: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       title: 'Mathematics Class',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
//       author: 'Mona George',
//       authorImageUrl: 'https://picsum.photos/200/300',
//     },
//     {
//       id: 12,
//       imageUrl: 'https://images.pexels.com/photos/5428155/pexels-photo-5428155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       title: 'Mathematics Class',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
//       author: 'Mona George',
//       authorImageUrl: 'https://picsum.photos/200/300',
//     },
//     {
//       id: 13,
//       imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       title: 'Mathematics Class',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
//       author: 'Mona George',
//       authorImageUrl: 'https://picsum.photos/200/300',
//     },
//     {
//       id: 14,
//       imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       title: 'Science Class',
//       description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//       author: 'John Doe',
//       authorImageUrl: 'https://picsum.photos/200/300',
//     },
//     {
//       id: 15,
//       imageUrl: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       title: 'Mathematics Class',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
//       author: 'Mona George',
//       authorImageUrl: 'https://picsum.photos/200/300',
//     },
//     {
//       id: 16,
//       imageUrl: 'https://images.pexels.com/photos/5428155/pexels-photo-5428155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       title: 'Mathematics Class',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
//       author: 'Mona George',
//       authorImageUrl: 'https://picsum.photos/200/300',
//     },
//     // Add more dummy data as needed
//   ];

const Readmore = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
      const fetchEvents = async () => {
          try {
              const response = await AxiosInstance.get('/event');
              console.log(response.data.event); 
              setData(response.data.event);
          } catch (error) {
              console.error(error);
          }
      };
      
      fetchEvents();
  }, []);



  const { id } = useParams();
  const card = data.find(item => item.id === parseInt(id));

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-slate-100  rounded-lg shadow-lg overflow-hidden flex flex-wrap" >
        <div className="md:w-1/2 w-full">
          <img
            className="object-cover w-full h-full"
            src={card.file}
            alt={card.title}
          />
        </div>
        <div className="p-6 md:w-1/2 w-full">
          <h1 className="text-xl font-semibold text-gray-800 mb-2 capitalize">{card.title}</h1>
          <p className="text-[#434445] mb-4">{card.description}</p>
          <p className='text-[#434445]'>Posted On : "{card.date}"</p>

        </div>
      </div>

      <div className='text-center mt-5 capitalize font-semibold text-[#12265a]'>
       <Link to={'/events'}> go back</Link>
      </div>
    </div>
  );
};

export default Readmore;