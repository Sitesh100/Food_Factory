import {ResturantCard }from './ResturantCard';
import resList from '../utils/mockData';
import { useState } from 'react';

export const Body = () => {
    const [listOfResturants,setListOfResturants] = useState( resList )

    return (
        <div className='body'>
            <div className='filter'>
                <button className='filter-btn'
                    onClick={() => {
                       const filteredList = listOfResturants.filter((res) => res.info.avgRating>4.5) ;
                       setListOfResturants( filteredList ) ; 
                    }}
                    >Top Resturants</button>
                    <button className='filter-btn' 
                        onClick={() => {
                            const filteredList = listOfResturants.filter((res) => res.info.cuisines.includes('Indian')) ;
                            setListOfResturants( filteredList ) ;
                        }}
                    >FoodFilter</button>
                    <button className='filter-btn' 
                        onClick={() => {
                            const filteredList = listOfResturants.filter((res) => res.info.cuisines.includes('Ice Cream')) ;
                            setListOfResturants( filteredList ) ;
                        }}
                    >FoodFilter</button>
            </div>
            <div className='res-contaner'>
                {
                    listOfResturants.map(res => (
                        <ResturantCard key={res.info.id} resData={res}/>
                    ))
                }
                
                
            </div>
        </div>
    );
   
};