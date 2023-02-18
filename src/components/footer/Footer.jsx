import React from 'react'
import "./footer.css"
import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import {IoLogoTwitter } from "react-icons/io"
import {FaGithub} from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'> SHUSIL </a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Expertise</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/shusil.gaire.33/' target="_blank"><FaFacebook/></a>
        <a href='https://www.instagram.com/_shusil_/' target="_blank"><FiInstagram/></a>
        <a href='https://twitter.com/gaire_shusil' target="_blank"><IoLogoTwitter/></a>
        <a href='https://github.com/Shusilgaire' target="_blank"><FaGithub/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; SHUSIL GAIRE.</small>
      </div>
    </footer>
  )
}

export default Footer