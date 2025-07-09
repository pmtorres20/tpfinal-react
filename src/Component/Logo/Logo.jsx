import React from 'react'
import { Link } from 'react-router-dom'
import logoSvg from '../../img/304204.svg'
import './Logo.css'

export default function Logo() {
    return (
        <Link to="/" className='logo_link'>
            <img src={logoSvg} alt="Logo ChatApp" className='logo_image' />
            <h1 className='h1_logo'>ChatBOX</h1>
        </Link>
    )
}
