import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import  {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"


const HeaderSocials= () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/shusil-gaire-28719b240/' target="_blank"><BsLinkedin/></a>
        <a href='https://www.facebook.com/shusil.gaire.33/' target="_blank"><BsFacebook/></a>
        <a href='https://www.instagram.com/_shusil_/' target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials 
