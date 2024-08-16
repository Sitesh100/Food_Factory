import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from "./components/Header.js";
import { Body } from './components/Body.js';


//passing a prop to the component its mean we pass arguments to the function.



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
