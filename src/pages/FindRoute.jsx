import React, { useState } from 'react';
import { findShortestPathWithColors } from '../constants/pathFinder';

const FindRoute = () => {
    const [source,setSource]=useState('');
    const [destination,setDestination]=useState('');
    const [path,setPath]=useState(null);
    const [error,setError]=useState('');

    const handleFindRoute=()=>{
        if(!source||!destination){
            setError('Please enter both source and destination stations.');
            setPath(null);
            return;
        }
        const result = findShortestPathWithColors(source, destination);

        if (result) {
            setPath(result);
            setError('');
        } else {
            setError('No path could be found between the given stations.');
            setPath(null);
        }
    }

    return (
        <div className="h-full w-full bg-gray-100 flex flex-col justify-center items-center p-4 rounded-xl m-3">
            {/* heading */}
            <h1 className='text-2xl font-bold text-center mb-6 text-black'>Select Your Source and Destination</h1>
            
            {/* form for input */}
            <div className="from-control mb-4">
                
            </div>



        </div>
    )
}

export default FindRoute
