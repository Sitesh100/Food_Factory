import {ResturantCard }from './ResturantCard';
import resList from '../utils/mockData';

export const Body = () => {
    return (
        <div className='body'>
            <div className='search'>
                search
            </div>
            <div className='res-contaner'>
                {
                    resList.map(res => (
                        <ResturantCard key={res.info.id} resData={res}/>
                    ))
                }
                
                
            </div>
        </div>
    );
   
};