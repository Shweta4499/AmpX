// src/utils/useSound.js
import { Howl } from 'howler';

export default function useSound(src) {
  return () => {
    const sound = new Howl({ src: [src], volume: 0.5 });
    sound.play();
  };
}
