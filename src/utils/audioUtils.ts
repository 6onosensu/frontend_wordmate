export const playAudio = (audioUrl?: string | null) => {
  if (audioUrl) {
    const audio = new Audio(audioUrl);
    audio.play();
  }
};