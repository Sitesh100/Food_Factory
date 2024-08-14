import React from 'react';
import ReactDOM from 'react-dom/client';


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
    return(
        <div className='res-card'> 
        <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cubesnjuliennes.com%2Fwp-content%2Fuploads%2F2020%2F06%2FBest-Instant-Pot-Butter-Chicken-Recipe.jpg&f=1&nofb=1&ipt=b784f03e821104d8b41030842ca527c6d7b22bd84d7f60c23db4f9ca0ebbd0c9&ipo=images' alt='food pic'/>
            <h3>{props.resName}</h3>
            <h4>{props.Food}</h4>
            <h4>4.5</h4>
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
                <ResCard resName="Apka Dhaba" Food="Butter chicken" />
                <ResCard resName="Mera Dhaba" Food="Tanduri chicken" />
                <ResCard resName="Tumhara Dhaba" Food="Matter Panner" />
                <ResCard resName="Sbka Dhaba" Food="Saahi Panner" />
                <ResCard resName="Pakoda Dhaba" Food="Pakoda" />
                <ResCard resName="Alok Dhaba" Food="Chicken Tikka Masala" />
                
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
