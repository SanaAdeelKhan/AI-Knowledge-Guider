import { useState } from "react";

function VoiceChat({ onTranscription }) {
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState("");

  const handleMicClick = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setError("Your browser doesn't support speech recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsListening(true);
    recognition.onerror = (e) => setError(`Error: ${e.error}`);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onTranscription(transcript);
    };

    recognition.start();
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <button onClick={handleMicClick} style={{ padding: "10px", fontSize: "1rem" }}>
        🎤 {isListening ? "Listening..." : "Speak"}
      </button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}

export default VoiceChat;
