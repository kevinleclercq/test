import React, { useEffect, useState } from 'react';
import { searchRetailPoints } from '../utils/YperApi';
import Map from '../components/Map';
import Link from 'next/link';


export default function SearchBoutique({ geoCode }) {
    const [retailPoints, setRetailPoints] = useState([]);
    const [PositionLat, PositionLng] = geoCode.split(',').map(coord => parseFloat(coord));

    useEffect(() => {
        searchRetailPoints(geoCode, 0, 30000).then((result) => {
            setRetailPoints(result.result.slice(0, 10));
            console.log('result', result.result)
        });
    }, [geoCode]);
    return (
        <div className='mb-10'>
            <div className='flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2 bg-y-gray-light pr-2'>
                    <h2 className='text-base p-6 font-bold font-montserrat'>
                        Résultats de la recherche :
                    </h2>
                    <div className="border-b-2 w-5/6 ml-6"></div>
                    <ul>
                        {retailPoints.map((point, id) => (
                            <li key={id}>
                                <div className='flex-col justify-between'>
                                    <div className="flex flex-row justify-between items-center">
                                        <h3 className="text-sm pl-12 p-6 font-bold font-montserrat">{point.name}</h3>
                                        <Link href={`/boutique/${point._id}`}>
                                            <span className="cursor-pointer text-base font-normal font-montserrat">voir plus d'infos</span>
                                        </Link>
                                    </div>
                                    <div className="border-b-2 w-5/6 ml-6"></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='w-full md:w-1/2 pl-5 md:pl-5'>
                    <Map
                        center={{
                            lat: PositionLat,
                            lng: PositionLng
                        }}
                        zoom={12}
                        markers={retailPoints}
                    />
                </div>
            </div>
        </div>
    );

}
