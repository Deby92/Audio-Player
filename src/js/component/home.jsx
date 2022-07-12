import React from "react";
import {useState, useEffect} from "react";
import Player from "./Player.js";

//create your first component
const Home = () => {
	const [songs] = useState ([
		{
			title: "Withu",
			artist: "BLVK",
			img_src: "./img/pic5.jpg",
			src: "https://soundcloud.com/yungmai/sleepy?in=yourparadis/sets/jazz-hip&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
		},
		{
			title: "A Glimmer Of Light",
			artist: "MasterClass",
			img_src: "./img/pic6.jpg",
			src: "https://soundcloud.com/noisesymphony/a-glimmer-of-light?in=yourparadis/sets/jazz-hip&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
		},
		{
			title: "Truly dont care",
			artist: "Ariose",
			img_src: "./img/pic4.jpg",
			src: "https://soundcloud.com/ariosemusic/again?in=yourparadis/sets/jazz-hip&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
		},
		{
			title: "Meditate (REEL STREET JAZZ)",
			artist: "Mujo情",
			img_src: "./img/pic3.jpg",
			src: "https://soundcloud.com/mujobeatz/meditate-reel-street-jazz?in=yourparadis/sets/jazz-hip&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
		},
		{
			title: "Here If You Want (Pale Blue)",
			artist: "MOSSS",
			img_src: "./img/pic1.jpg",
			src: "https://soundcloud.com/mosssmusic/here-if-you-want-pale-blue-2?in=yourparadis/sets/jazz-hip&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
		},
		{
			title: "Sometimes I feel",
			artist: "Youthgroove",
			img_src: "./img/pic2.jpg",
			src: "https://soundcloud.com/mosssmusic/here-if-you-want-pale-blue-2?in=yourparadis/sets/jazz-hip&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
		}
	])

	const [currentSongIndex, setCurrentSongIndex] = useState(0);
	const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

	useEffect (() =>{
		setNextSongIndex(() => {
			if(currentSongIndex + 1 >songs.length - 1) {
				return 0;
			} else {
				return currentSongIndex +1;
			}
		})
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
