// src/components/VoiceChat.js
import { useState } from "react";
import { routeToAgent } from "../agents/fetchConfig";

function VoiceChat() {
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState("");
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");

  const handleMicClick = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setError("🚫 Your browser doesn't support speech recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
      setError("");
    };

    recognition.onerror = (e) => {
      setError(`❌ Error: ${e.error}`);
      setIsListening(false);
    };

    recognition.onend = () => setIsListening(false);

    recognition.onresult = async (event) => {
      const text = event.results[0][0].transcript;
      setTranscript(text);
      const reply = await routeToAgent(text);
      setResponse(reply);
    };

    recognition.start();
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>🎤 Ask with Your Voice</h3>
      <button onClick={handleMicClick} disabled={isListening}>
        {isListening ? "🎙️ Listening..." : "🎙️ Tap to Speak"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {transcript && (
        <p>
          <strong>You said:</strong> {transcript}
        </p>
      )}
      {response && (
        <div className="response-box">
          <strong>Agent:</strong> {response}
        </div>
      )}
    </div>
  );
}

export default VoiceChat;
