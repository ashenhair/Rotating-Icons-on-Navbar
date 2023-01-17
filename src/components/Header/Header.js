import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

import { SiGmail} from "react-icons/si";
import { FaReadme } from "react-icons/fa";
import { BiBookHeart, BiBookBookmark, BiCog} from "react-icons/bi";


const Header = () => {

 

    return (
       
    
    
            <nav className='menu'>
    
                <ul className = 'ul-item' >
    
                   
    
                    <li>
                        <SiGmail className='icon'/>
                        <Link to='/'>pat@gmail.com</Link>
                    </li>
    
                    <li>
                        <FaReadme className='icon'/>
                        <Link to='/'>Keep Reading</Link>
                    </li>
    
                    <li>
                        <BiBookHeart className='icon'/>
                        <Link to='/'>Favorites</Link>
                    </li>
    
                    <li>
                        <BiBookBookmark className='icon'/>
                        <Link to='/'>Read later</Link>
                    </li>


                    <li>
                    <BiCog className='icon'/>
                    <Link to='/'>Settings</Link>
                    </li>
                    

                       
                </ul>
    
            </nav>
    )
    
          
        

    
      
    }
    
    
    export default Header

               

 
