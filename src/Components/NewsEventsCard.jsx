import React, { useEffect, useState } from 'react';
import AxiosInstance from '../Api/AxiosInstance';
import { Link } from 'react-router-dom';

const itemsPerPage = 6;

// const dummydata = [
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
//     },{
//         id: 17,
//         imageUrl: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         title: 'Mathematics Class',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
//         author: 'Mona George',
//         authorImageUrl: 'https://picsum.photos/200/300',
//       },
//       {
//         id: 18,
//         imageUrl: 'https://images.pexels.com/photos/5428155/pexels-photo-5428155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         title: 'Mathematics Class',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
//         author: 'Mona George',
//         authorImageUrl: 'https://picsum.photos/200/300',
//       },
//       {
//         id: 19,
//         imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         title: 'Mathematics Class',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
//         author: 'Mona George',
//         authorImageUrl: 'https://picsum.photos/200/300',
//       },
//       {
//         id: 20,
//         imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         title: 'Science Class',
//         description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         author: 'John Doe',
//         authorImageUrl: 'https://picsum.photos/200/300',
//       }
//     // Add more dummy data as needed
//   ];

function NewsEventsCard() {

    const [expanded, setExpanded] = useState({});

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

const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-wrap gap-6 items-center justify-center'>
                {currentItems.map((event, index) => (
                    <div className='w-[330px] h-[385px] md:w-[400px] md:h-[400px] border-8 border-white-900 rounded-xl' key={index}>

                        <img className='w-full h-1/2 rounded-t-xl' src={event.file} alt={event.title} />

                        <div className='p-4'>
                            <p className='font-bold text-lg capitalize mb-4'>{event.title}</p>

                            <p className="text-[#434445] mb-4">
                            {expanded[index] ? event.description : `${event.description.slice(0, 100)}`}
                            {event.description.length > 100 && (
                            <Link to={`/readmore/${event.id}`} className="text-blue-500 cursor-pointer">
                                &nbsp; Read more
                            </Link>
                            )}
                            </p>

                            <p className='text-[#434445]'>Posted On : "{event.date}"</p>
                        </div>

                    </div>
                ))}
            </div>


            <div className='mt-4'>
                <button onClick={handlePrevPage} disabled={currentPage === 1} className='px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 mr-2'>
                    Previous
                </button>
                <button onClick={handleNextPage} disabled={currentPage === totalPages} className='px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50'>
                    Next
                </button>
            </div>

        </div>
    );
};

export default NewsEventsCard;
