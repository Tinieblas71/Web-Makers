import React from 'react'
import { LINKS } from '../constants'
import { RiMenu3Fill, RiCloseFill  } from '@remixicon/react'
import logo from '../assets/web-maker-logo.png'

function Navbar() {

    const [menuOpen, setMenuOpen] = React.useState(false)

    const handleLiknClick = () => {
        setMenuOpen(false)
    }

    return (
        <nav className='fixed top-0 left-0 w-full z-50'>
            <div className='flex justify-between items-center max-w-6xl mx-auto md:my-2 bg-stone-950/30 p-4 md:rounded-xl backdrop-blur-lg'>
                <div className='text-white font-semibold text-lg uppercase flex'>
                    <img src={logo} width={32} height={32} alt="web-maker's logo" />
                    <a href="/" className='ml-5'> Web Maker's </a>
                </div>

                <div className='hidden md:flex space-x-8'>
                    {
                        LINKS.map((link, index) => (
                            <a 
                                key={index} 
                                href={link.href} 
                                className='text-white hover:text-stone-300 transition-colors duration-300 text-lg'> 
                                    {link.label} 
                            </a>
                        ))
                    }
                </div>

                <div className='md:hidden'> 
                    <button
                     onClick={() => setMenuOpen(!menuOpen)}
                     className='text-white focus:outline-none' aria-label={menuOpen ? "Close Menu" : "Open Menu"}> 
                        {menuOpen ? (
                            <RiCloseFill className='w-6 h-6'/>
                        ) : (
                            <RiMenu3Fill className='w-6 h-6'/>
                        )}
                    </button>
                </div>
            </div>

            {
                menuOpen && (
                    <div className='md:hidden bg-stone-950/30 p-2 backdrop-blur-lg rounded-xl flex flex-col space-y-4 max-w-6xl mx-auto'>
                        {
                            LINKS.map((link, index) => (
                                <a 
                                    key={index} 
                                    href={link.href} 
                                    className='text-white hover:text-stone-300 transition-colors duration-300 text-lg' 
                                    onClick={handleLiknClick}> 
                                    {link.label} 
                                </a>
                            ))
                        }
                    </div>
                )
            }

        </nav>
    )
}

export default Navbar