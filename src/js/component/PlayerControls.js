import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepForward, faStepBackward } from '@fortawesome/free-solid-svg-icons';

export default function PlayerControls(props) {
  return (
    <div className='c-player--controls'>
        <button className='skip-btn' onClick={() => props.SkipSong(false)}>
            <FontAwesomeIcon icon={faStepBackward} />
        </button>
        <button className='play-btn' onClick={() => props.setIsPlaying(!props.isPlaying)}>
            <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
        </button>
        <button className='skip-btn' onClick={() => props.SkipSong()}>
            <FontAwesomeIcon icon={faStepForward} />
        </button>

    </div>
  )
}
