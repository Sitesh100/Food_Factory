import { LOGO_URL } from "../utils/constant";

 const Header = () => {
    return (
        <div className='header'>
           <div className='logo'>
            <img  src={LOGO_URL}  alt='food logo' />
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

export default Header;