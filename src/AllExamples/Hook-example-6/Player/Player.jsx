import { useRef } from 'react';

import css from '../Hooks.module.css';

const Player = ({ source }) => {
  const playerRef = useRef();
  const play = () => playerRef.current.play();
  const pause = () => playerRef.current.pause();

  return (
    <div>
      <video ref={playerRef} src={source}>
        Sorry, your browser does not support embedded videos.
      </video>
      <div>
        <button onClick={play} className={css.button}>
          Play
        </button>
        <button onClick={pause} className={css.button}>
          Pause
        </button>
      </div>
    </div>
  );
};

export default Player;
