import { memo } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import burger from './animations/burger.json';
import './Loader.scss';

export const Loader = memo(() => {
    return (
        <div className="Loader">
            <h2 className="Loader__text">Loading...</h2>
            <Player
                autoplay
                loop
                src={burger}
                style={{
                    height: '300px',
                    width: '300px',
                    display: 'block',
                    margin: '0 auto'
                }}
            >
            </Player>
        </div >
    );
});

Loader.displayName = 'Loader';
