import { useEffect, useState, useRef } from "react";
import {
  Box,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

import { IoPlayCircleOutline, IoPauseCircleOutline } from "react-icons/io5";

const styles = {
  mainContainer: {
    width: "100%",
    height: "60px",
    p: "8px 20px",
    bottom: "0",
    left: "0",
    bg: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(3px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  playIcon: {
    w: "50px",
    h: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bg: "bleuDeFrance",
    borderRadius: "10px",
  },
};

function AudioPlayer(props: { isPlaying: boolean; preview_url: string }) {
  const { isPlaying, preview_url } = props;

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!audioRef || !audioRef?.current) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();

      audioRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    togglePlay();
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setProgress(
      (audioRef.current.currentTime / audioRef.current.duration) * 100
    );
  };

  return (
    <Box {...styles.mainContainer} position="absolute">
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} src={preview_url} />

      <Box display="flex" alignItems="center" gap={3}>
        <Flex {...styles.playIcon}>
          {isPlaying ? (
            <IoPauseCircleOutline size={20} color="white" />
          ) : (
            <IoPlayCircleOutline size={20} color="white" />
          )}
        </Flex>

        <Slider
          value={progress}
          onChange={(val) =>
            (audioRef.current!.currentTime =
              (val / 100) * audioRef.current!.duration)
          }
        >
          <SliderTrack bg="magnolia">
            <SliderFilledTrack bg="bleu" />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    </Box>
  );
}

export default AudioPlayer;
