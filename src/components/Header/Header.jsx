import React, { useState } from "react";
import './Header.css'
import logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from "react-scroll"

const header = () => {

  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpend, setMenuOpend] = useState(false);

  return (
    <div className="header">
      <img src={logo} alt="" className='logo' />

      {menuOpend === false && mobile === true ? (
        <div
          
        style={{backgroundColor: "var(--appColor)",
        padding: '0.5rem',
        borderRadius: '5px',
        }}

        onClick={() => setMenuOpend(true)}
        
        >
          <img src={Bars} alt="" style={{width: '1.5rem', height: '1.5rem'}} />
        </div>
      ) :( 

        <ul className='header-menu'>
        <li onClick={()=>setMenuOpend(false)}>
          <Link
          onClick={()=>setMenuOpend(false)}
          to='home'
          spy={true}
          smooth={true}
          
          >Home</Link>
        </li>
        <li onClick={()=>setMenuOpend(false)}> <Link 
           onClick={()=>setMenuOpend(false)}
           to='programs'
            spy={true}
            smooth={true}
          >Programs</Link></li>
        <li onClick={()=>setMenuOpend(false)}>
        <Link 
           onClick={()=>setMenuOpend(false)}
           to='reasons'
            spy={true}
            smooth={true}
          >Reasons</Link>
        </li>
        <li onClick={()=>setMenuOpend(false)}>
        <Link 
           onClick={()=>setMenuOpend(false)}
           to='plan'
            spy={true}
            smooth={true}
          >Plans</Link>
        </li>
        <li onClick={()=>setMenuOpend(false)}>
          <Link 
           onClick={()=>setMenuOpend(false)}
           to='testimonials'
            spy={true}
            smooth={true}
          >Testimonials</Link>
        </li>
      </ul>

      )}
    </div>
  )
}

export default header