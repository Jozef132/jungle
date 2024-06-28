import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import volumeMuteIcon from "@iconify-icons/clarity/volume-mute-solid";
import volumeUpIcon from "@iconify-icons/ri/volume-up-fill";

const AudioPlayer = ({ src }) => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const fadeAudio = (fadeOut, callback) => {
    let volume = fadeOut ? 1 : 0;
    const interval = setInterval(() => {
      if (audioRef.current) {
        volume = fadeOut ? volume - 0.05 : volume + 0.05;
        audioRef.current.volume = Math.max(0, Math.min(1, volume));
        if (volume <= 0 || volume >= 1) {
          clearInterval(interval);
          if (callback) callback();
        }
      }
    }, 50);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.muted = false; // Ensure unmuting before fading in
        fadeAudio(false, () => setIsMuted(false));
      } else {
        fadeAudio(true, () => {
          audioRef.current.muted = true; // Ensure muting after fading out
          setIsMuted(true);
        });
      }
    }
  };

  useEffect(() => {
    if (audioRef.current && !isMuted) {
      audioRef.current.volume = 1;
    }
  }, [isMuted]);

  return (
    <div className="audio-player absolute bottom-[15px] right-[35px]">
      <button
        className={`text-white ml-4 click ${isMuted ? "muted" : "unmuted"}`}
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute music" : "Mute music"}
      >
        <Icon
          icon={isMuted ? volumeMuteIcon : volumeUpIcon}
          width="40"
          height="40"
        />
      </button>
      <audio src={src} autoPlay loop ref={audioRef}></audio>
      <style jsx>{`
        .audio-player button {
          transition: opacity 0.5s ease-in-out;
        }
        .audio-player button.muted {
          opacity: 0.5;
        }
        .audio-player button.unmuted {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default AudioPlayer;
