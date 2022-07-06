import "./Menu.css";
import React from "react";
import {Home} from '../Home'
import {About} from '../About'
import {Contact} from "../Contact"

import {HashRouter,Routes,Route,Navigate} from 'react-router-dom'
function template() {
    const {menuItem,isMobileView,left}=this.state
    return <div>
        {isMobileView && <button onClick={this.fnMobileMenuBtnClick} className='mobile-menu-btn'>menu</button>}
        <ul style={{left}} className={`${isMobileView && 'mobile-menu'} menu`} onClick={this.fnMenuClick}>
            <li>
              <a className={menuItem == 'home' && 'menu-active'} id='home' href="#/home">Home</a>
            </li>
            <li>
              <a className={menuItem == 'about' && 'menu-active'} id='about' href="#/about">About</a>
            </li>
            <li>
               <a className={menuItem == 'contact' && 'menu-active'} id='contact' href="#/contact">Contact</a>
            </li>
        </ul>
         <HashRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to='home' />} />
            </Routes> 


         </HashRouter>
         
         
        
        </div>
 
}
 


export default template;
