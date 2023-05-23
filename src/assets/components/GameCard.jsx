
import { FaStar } from 'react-icons/fa'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { useState } from "react"

function GameCard({ game, showLink = true }) {

    return (
        <>
            <div style={{ backgroundImage: `url(${game.background_image})` }} className="w-full h-full rounded-2xl bg-center cg-cover duration-500">
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
                <BsChevronCompactLeft size={30} />
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
                <BsChevronCompactRight size={30} />
            </div>
        </>
    )
}

export default GameCard



/*             <h2>{game.name}</h2>
            <p>
                <FaStar /> {game.metacritic}
            </p>
            {showLink && <Link to={`/game/${game.id}`}>Detalhes</Link>} */