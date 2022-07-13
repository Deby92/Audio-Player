import React from "react";
import {useState, useEffect} from "react";
import Player from "./Player.js";


//create your first component
const Home = () => {
	const [songs] = useState ([
		{
			title: "My Love",
			artist: "Florence & The Machine",
			img_src: "./img/pic-5.jpg",
			src: "./music/song1.mp3"
		},
		{
			title: "Plastic Beach",
			artist: "Gorillaz",
			img_src: "./img/pic-6.jpg",
			src: "./music/song2.mp3"
		},
		{
			title: "Halcyon Birds",
			artist: "Broken Back",
			img_src: "./img/pic-4.jpg",
			src: "./music/song3.mp3"
		},
		{
			title: "Insane in the Brain",
			artist: "Cypress Hill",
			img_src: "./img/pic-3.jpg",
			src: "./music/song4.mp3"
		},
		{
			title: "GOOD TIMES PROBLEMZ",
			artist: "JUNGLE",
			img_src: "./img/pic-2.jpg",
			src: "./music/song5.mp3"
		}
	])

	const [currentSongIndex, setCurrentSongIndex] = useState(0);
	const [nextSongIndex, setNextSongIndex] = useState(0);(currentSongIndex + 1)

	useEffect (() =>{
		setNextSongIndex(() => {
			if (currentSongIndex + 1 > songs.length - 1) {
			  return 0;
			} else {
				return currentSongIndex + 1;
			}
		});
	}, [currentSongIndex]);
	
	return (
		<div className="Home">
			<Player 
				currentSongIndex={currentSongIndex}
				setCurrentSongIndex={setCurrentSongIndex}
				nextSongIndex={nextSongIndex}
				songs={songs}
			/>
		</div>
	);
}

export default Home;
