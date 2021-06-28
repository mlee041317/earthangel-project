import React from 'react';
import Sound from 'react-sound';
import Skrillex from './Skrillex.mp3';

const PlaySound = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
) => {
    return (
        <div className="playsound">
            <Sound
                url={Skrillex} 
                playStatus={Sound.status.PLAYING} 
                playFromPosition={300} 
                onLoading={handleSongLoading} 
                onPlaying={handleSongPlaying} 
                onFinishedPlaying={handleSongFinishedPlaying} 
            />
        </div>
    );
};

export default PlaySound;