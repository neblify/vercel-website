'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Auto-play on mount
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setHasStarted(true);
        })
        .catch((error) => {
          // Auto-play was prevented, user interaction required
          console.log('Auto-play prevented:', error);
        });
    }

    // Loop the audio
    audio.loop = true;

    // Handle audio end to restart (backup for loop)
    const handleEnded = () => {
      audio.currentTime = 0;
      if (!isMuted) {
        audio.play();
      }
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.pause();
    } else {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setHasStarted(true);
          })
          .catch((error) => {
            // Autoplay was prevented - will need user interaction
            console.log('Play failed:', error);
          });
      }
    }
  }, [isMuted]);

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    
    // If unmuting, try to play (handles case where autoplay was blocked)
    if (!newMutedState) {
      const audio = audioRef.current;
      if (audio) {
        audio.play()
          .then(() => setHasStarted(true))
          .catch((error) => console.log('Play failed on toggle:', error));
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/BG_Music.mp3" preload="auto" />
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMute}
        className="h-10 w-10 text-foreground/60 hover:text-foreground"
        aria-label={isMuted ? 'Unmute music' : 'Mute music'}
      >
        {isMuted ? (
          <VolumeX className="h-5 w-5" />
        ) : (
          <Volume2 className="h-5 w-5" />
        )}
      </Button>
    </>
  );
}
