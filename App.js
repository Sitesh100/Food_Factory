import React from 'react';
import ReactDOM from 'react-dom/client';
import { resList } from './Data';

const Header = () => {
    return (
        <div className='header'>
           <div className='logo'>
            <img  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Ffood-logo-design_139869-254.jpg%3Fw%3D2000&f=1&nofb=1&ipt=b4f29c3f45279176429808ef2035ca3672e8945903ceec56b2f36531a2f8a749&ipo=images" alt='food logo' />
           </div>
           <div className='navbar'>
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Contact</a>
                <a href='#'>Cart</a>
            </div>
       </div>
    )
}

const ResCard = (props) => {
    const {resData} = props
    return(
        <div className='res-card'> 
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId} alt='food pic'/>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>40min</h4>
        </div>
    )
}
//passing a prop to the component its mean we pass arguments to the function.

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>
                search
            </div>
            <div className='res-contaner'>
                <ResCard resData = {resList[0]} />
                <ResCard resData = {resList[1]} />
                <ResCard resData = {resList[2]} />
                <ResCard resData = {resList[3]} />
                <ResCard resData = {resList[4]} />
                <ResCard resData = {resList[5]} />
                <ResCard resData = {resList[6]} />
                <ResCard resData = {resList[7]} />
                <ResCard resData = {resList[8]} />
                <ResCard resData = {resList[9]} />
                <ResCard resData = {resList[10]} />
                <ResCard resData = {resList[11]} />
                
            </div>
        </div>
    )
   
}



const AppLayout = () => {
    return (
        <div className='App-Layout'>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
