import { CDN_URL } from "../utils/constant"


export const ResturantCard = (props) => {
    const {resData} = props
    return(
        <div className='res-card'> 
        <img src={CDN_URL+resData.info.cloudinaryImageId} alt='food pic'/>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>40min</h4>
        </div>
    )
}