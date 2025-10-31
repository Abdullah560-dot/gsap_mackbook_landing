import React from 'react'
import {navLinks} from "../constants";

const NavBar = () => {
    return (
        <header>
            <nav>
                <img src="/logo.svg" alt="apple logo" loading='lazy' />
                <ul>
                    {navLinks.map(({label}) => (
                        <li key={label}>
                            <a href={label}>
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='flex-center gap-3'>
                    <button>
                        <img src='/search.svg' alt='Search' loading='lazy' />
                    </button>
                    <button>
                        <img src='/cart.svg' alt='Cart' loading='lazy' />
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default NavBar
