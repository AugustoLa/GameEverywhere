import React from 'react'
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
const gamesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const date = new Date();

let currentDay = String(date.getDate()).padStart(2, '0');

let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

let currentYear = date.getFullYear();


function Home() {
    const [topGames, setTopGames] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const getTopRatedGames = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setTopGames(data.results.slice(0, 10));
    };

    useEffect(() => {
        const topRatedUrl = `${gamesURL}?metacritic=94,100&key=${apiKey}&dates=2010-09-01,${currentYear}-${currentMonth}-${currentDay}`;
        getTopRatedGames(topRatedUrl);
    }, []);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? topGames.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === topGames.length - 1 ? 0 : prevIndex + 1));
    };

    const goToSlide = (gameIndex) => {
        setCurrentIndex(gameIndex)
    }

    return (
        <>

            {/* Best Games Section */}
            <h1 className='text-center font-bold md:text-4xl text-xl mt-10'>Melhores avaliações</h1>
            <div className="md:max-w-[1400px] md:h-[70vh] h-[400px] max-w-[500px] mx-auto my-4 relative group">
                {topGames.length === 0 && <p>Carregando...</p>}
                {topGames.length > 0 && (
                    <>
                        {/* Game Details */}
                        <div style={{ backgroundImage: `url(${topGames[currentIndex].background_image})` }} className="w-full h-full flex flex-col items-center justify-center rounded-2xl bg-center bg-cover">
                            <div className='md:w-[45%] md:h-[25%] rounded-full w-[70%] h-[50%] bg-gray-600/40 flex flex-col items-center justify-center'>
                                <p className='md:text-5xl text-center text-xl mb-5'>{topGames[currentIndex].name}</p>
                                <Link to={`/game/${topGames[currentIndex].id}`}>
                                    <p className='bg-[#F7d354] rounded-full text-xl hover:bg-[#F7d35450] duration-500 py-4 px-6 text-black'>Detalhes</p>
                                </Link>
                            </div>
                        </div>
                        {/* Arrow Left */}
                        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 hover:bg-gray-300 duration-200 text-white cursor-pointer" onClick={handlePrevClick}>
                            <BsChevronCompactLeft size={30} />
                        </div>
                        {/* Arrow Left */}
                        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 hover:bg-gray-300 duration-200 text-white cursor-pointer" onClick={handleNextClick}>
                            <BsChevronCompactRight size={30} />
                        </div>
                    </>
                )}
            </div>
            {/*Slider dots*/}
            <div className='flex top-4 justify-center py-2'>
                {topGames.map((game, gameIndex) => (
                    <div key={gameIndex} onClick={() => goToSlide(gameIndex)} className='text-2xl cursor-pointer'>
                        <RxDotFilled className={currentIndex === gameIndex ? 'text-black bg-gray-300 border-gray-300 border-2 rounded-full p-1' : ''}></RxDotFilled>
                    </div>
                ))}
            </div >
        </>
    );
}

export default Home
