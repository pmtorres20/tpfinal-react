import React from 'react'
import { Link } from 'react-router-dom'
import { Themebtn } from '../Theme/ThemeButton'
import Logo from '../Logo/Logo'
import './Header.css'

export default function Header({ title, subtitle, titleLink }) {
    return (
        <div className='header_container'>
            <div className='header_content'>
                <div className='header_logo'>
                    <Logo />
                </div>
                
                <div className='header_center'>
                    {title && (
                        titleLink ? 
                            (<Link to={titleLink} className='header_title_link'>
                                <h1 className='header_title'>{title}</h1>
                            </Link>) 
                            : 
                            (<h1 className='header_title'>{title}</h1>)
                        )}
                    {subtitle && <p className='header_subtitle'>{subtitle}</p>}
                </div>
                
                <div className='header_actions'>
                    <Themebtn />
                </div>
            </div>
        </div>
    )
}
