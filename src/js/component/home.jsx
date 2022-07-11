import React from "react";
import {useState} from "react";

//create your first component
const Home = () => {
	const [songs, setSongs] = useState ([
		{
			"title": "BLVK-withu",
			"src": "https://soundcloud.com/yungmai/sleepy?in=yourparadis/sets/jazz-hip&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
		},
		{
			"title": "MasterClass - A Glimmer Of Light",
			"src": "https://soundcloud.com/noisesymphony/a-glimmer-of-light?in=yourparadis/sets/jazz-hip&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
		},
		{
			"title": "ariose - Truly dont care",
			"src": "https://soundcloud.com/ariosemusic/again?in=yourparadis/sets/jazz-hip&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
		},
		{
			"title": "Mujo情 - Meditate (REEL STREET JAZZ)",
			"src": "https://soundcloud.com/mujobeatz/meditate-reel-street-jazz?in=yourparadis/sets/jazz-hip&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
		},
		{
			"title": "MOSSS - Here If You Want (Pale Blue)",
			"src": "https://soundcloud.com/mosssmusic/here-if-you-want-pale-blue-2?in=yourparadis/sets/jazz-hip&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
		},
		{
			"title": "youthgroove - sometimes i feel",
			"src": "https://soundcloud.com/mosssmusic/here-if-you-want-pale-blue-2?in=yourparadis/sets/jazz-hip&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
		}
	])
	
	return (
		<div className="Home">
			
		</div>
	)
	/* 	<div className="constainer">
			<div className="interfaz">
				<div className="music_list">
					<ul>
						<li>song 1</li>
						<li>song 2</li>
						<li>song 3</li>
						<li>song 3</li>
						<li>song 3</li>
						<li>song 3</li>
					</ul>
				</div>
			</div>
			<div className="Player">
				<h1>song-title</h1>
				<div className="seek_bar"></div>
				<span><i className="fa-solid fa-backward-step"></i></span>
				<span><i className="fa-solid fa-circle-play"></i></span>
				<span><i className="fa-solid fa-circle-pause"></i></span>
				<span><i class="fa-solid fa-forward-step"></i></span>
			</div>
		</div> */
};

export default Home;
