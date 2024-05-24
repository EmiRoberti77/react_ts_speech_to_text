import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

import '../App.css';
import { useRef, useState } from 'react';
import { commands } from './Commands';
const speechImage = '/speechIcon.png';
const Speech = () => {
  const [isListening, setIsListening] = useState(false);
  const { transcript, resetTranscript } = useSpeechRecognition({
    commands,
  });
  const microphoneRef: any = useRef(null);

  const handleListening = () => {
    if (isListening) stopListening();
    else startListening();
  };

  const startListening = () => {
    microphoneRef.current.classList.add('listening');
    SpeechRecognition.startListening({
      continuous: true,
    });
    setIsListening(true);
  };

  const stopListening = () => {
    microphoneRef.current.classList.remove('listening');
    SpeechRecognition.stopListening();
    setIsListening(false);
  };

  const resetListening = () => {
    stopListening();
    resetTranscript();
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Speech module not supported with this browser
      </div>
    );
  }

  return (
    <div>
      <div className="mircophone-container">
        <div
          className="microphone-icon-container"
          onClick={handleListening}
          ref={microphoneRef}
        >
          <img src={speechImage} className="microphone-icon" />
        </div>
        <div className="microphone-status">
          {isListening ? 'Listening .... ' : 'start listening'}
        </div>
      </div>
      {transcript && (
        <div className="microphone-result-container">
          <button onClick={resetListening} className="microphone-reset btn">
            Reset
          </button>
          <div className="microphone-result-text">{transcript}</div>
        </div>
      )}
    </div>
  );
};

export default Speech;
