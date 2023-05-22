import { Link } from "react-router-dom"
import { FaStar } from 'react-icons/fa'
import '../pages/GameGrid.css'

function GameCard({ game, showLink = true }) {
    return (
        <div className="movie-card">
            <img src={game.background_image} alt={game.name} />
            <h2>{game.name}</h2>
            <p>
                <FaStar /> {game.metacritic}
            </p>
            {showLink && <Link to={`/game/${game.id}`}>Detalhes</Link>}
        </div>
    )
}

export default GameCard