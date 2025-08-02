

import { Pause, Play } from "./Player"
import { usePlayerStore } from '@/store/playerStore'

export function CardPlayButton({ id, size = 'small' }) {
    const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore(state => state);

    const isPlayingPlayList = isPlaying && currentMusic?.playlist?.id === id

    const handleClick = () => {

        if (isPlayingPlayList) {
            setIsPlaying(false);
            return
        }

        // fetch with promise version
        // This is a simple example, you might want to handle errors and loading states in a real application
        fetch(`/api/get-info-playlist.json?id=${id}`)
            .then(res => res.json())
            .then(data => {

                const { songs, playlist } = data

                setIsPlaying(true);
                setCurrentMusic({
                    songs,
                    playlist,
                    song: songs[0],
                });
            })

        //async/await version 
        // Uncomment the following lines if you want to use async/await
        // conts data = response.json();
        //const {songs, playlist} = data;
        //setIsPlaying(true);
    }
    const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-6 h-6';

    return (
        <button onClick={handleClick} className="card-play-button rounded-full bg-green-500 p-4  transition hover:scale-105 hover:bg-green-400">
            {isPlayingPlayList ? <Pause className={iconClassName} /> : <Play className={iconClassName} />}
        </button>
    )
}