import React from 'react'
import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import './Navbar.css'

function Navbar() {
    return (
        <nav id='navbar'>
            <h2>
                <Link to='/'><BiCameraMovie />GamesLib</Link>
            </h2>
            <form>
                <input type='text' placeholder='Busque um game'></input>
                <button type='submit'>
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    )
}

export default Navbar