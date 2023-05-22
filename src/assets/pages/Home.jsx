import React from 'react'
import { useState, useEffect } from 'react'
import GameCard from '../components/GameCard'
import './GameGrid.css'

const gamesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const date = new Date();

let currentDay = String(date.getDate()).padStart(2, '0');

let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

let currentYear = date.getFullYear();


function Home() {
    console.log(`${currentYear}-${currentMonth}-${currentDay}`)
    const [topGames, setTopgames] = useState([])

    const getTopRatedGames = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTopgames(data.results)
    }

    useEffect(() => {

        const topRatedUrl = `${gamesURL}?ordering=-metacritic&key=${apiKey}&dates=2010-09-01,${currentYear}-${currentMonth}-${currentDay}`
        getTopRatedGames(topRatedUrl)
    }, [])

    return (
        <div className='container'>
            <h2 className="title">Melhores Jogos: </h2>
            <div className="games-container">
                {topGames.length === 0 && <p>Carregando...</p>}
                {topGames.length > 0 && topGames.map((game) => <GameCard game={game} />)}
            </div>
        </div>
    )
}

export default Home