import { FC } from "react";
import { Typography, Box } from "@mui/material";
import soundIcon from "@/assets/sound.svg"; 
import SvgButton from "@/components/common/SvgButton";
import { playAudio } from "@/utils/audioUtils";

interface WordHeaderProps {
  data: any;
}

const WordHeader: FC<WordHeaderProps> = ({ data }) => {
  const audioSource = data.phonetics?.find((p: any) => p.audio)?.audio;

  return (
    <Box sx={{ textAlign: "center", mt: 1 }}>
      <Typography variant="h3">{data.word}</Typography>
      <Typography variant="h5" sx={{ mt: 1 }}>
        {data.phonetic || ""}
        {audioSource && (
          <SvgButton
            iconSrc={soundIcon}
            altText="Play Sound"
            onClick={() => playAudio(audioSource)}
          />
        )}
      </Typography>
    </Box>
  );
};

export default WordHeader;
