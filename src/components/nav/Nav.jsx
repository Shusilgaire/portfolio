import React from 'react'
import "./nav.css"
import {AiFillHome} from "react-icons/ai"
import {FaUserCircle} from "react-icons/fa"
import {MdSchool} from "react-icons/md"
import {MdWorkOutline} from "react-icons/md"
import {BiBook} from "react-icons/bi"
import {BiMessageSquareDetail} from "react-icons/bi"
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 
      'active' : ' '}><AiFillHome/></a>

      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 
      'active' : ''}><FaUserCircle/></a>

      <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 
      'active' : ''}><MdSchool/></a>

      <a href="#workexperience" onClick={() => setActiveNav('#workexperience')} className={activeNav === '#workexperience' ? 
      'active' : ''}><MdWorkOutline/></a>

      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 
      'active' : ''}><BiBook/></a>
      
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 
      'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav