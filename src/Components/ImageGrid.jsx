import React, { useEffect, useState } from 'react';
import AxiosInstance from '../Api/AxiosInstance';

const itemsPerPage = 12;

// const dummyData = [
//   {
//     id: 1,
//     imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     title: 'Mathematics Class',
   
//   },
//   {
//     id: 2,
//     imageUrl: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     title: 'Science Class',
   
//   },
//   {
//     id: 3,
//     imageUrl: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     title: 'Mathematics Class',
  
//   },
//   {
//     id: 4,
//     imageUrl: 'https://images.pexels.com/photos/5428155/pexels-photo-5428155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     title: 'Mathematics Class',
    
//   }, {
//     id: 5,
//     imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     title: 'Mathematics Class',
   
//   },
//   {
//     id: 6,
//     imageUrl: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     title: 'Science Class',
   
//   },
//   {
//     id: 7,
//     imageUrl: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     title: 'Mathematics Class',
  
//   },
//   {
//     id: 8,
//     imageUrl: 'https://images.pexels.com/photos/5428155/pexels-photo-5428155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     title: 'Mathematics Class',
    
//   },
//   {
//     id: 9,
//     imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     title: 'Mathematics Class',
   
//   },
//   {
//     id: 10,
//     imageUrl: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     title: 'Science Class',
   
//   },
//   {
//     id: 11,
//     imageUrl: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     title: 'Mathematics Class',
  
//   },
//   {
//     id: 12,
//     imageUrl: 'https://images.pexels.com/photos/5428155/pexels-photo-5428155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     title: 'Mathematics Class',
    
//   },
// ];
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

function ImageGrid() {

    const [expanded, setExpanded] = useState({});

const [data, setData] = useState([]);

  useEffect(() => {
      const fetchEvents = async () => {
          try {
              const response = await AxiosInstance.get('/gallery');
              console.log(response.data.photos); 
              setData(response.data.photos);
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
                    <div className='w-[300px] h-[345px] md:w-[300px] md:h-[300px] hover:border-dashed hover:border-slate-300 border-8 border-white-900 rounded-xl' key={index}>

                        <img className='w-full h-full rounded' src={event.imageUrl} alt={event.id} />

                    </div>
                ))}
            </div>


            <div className='mt-4 flex'>
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

export default ImageGrid;
