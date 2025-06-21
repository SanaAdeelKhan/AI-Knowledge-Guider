import { useState } from "react";
import { routeToAgent } from "./agents/fetchConfig";
import VoiceChat from "./components/VoiceChat";
import Avatar3D from "./components/Avatar3D";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = () => {
    const reply = routeToAgent(userInput);
    setResponse(reply);
    setUserInput("");
  };

  const handleVoiceInput = (transcript) => {
    setUserInput(transcript);
    const reply = routeToAgent(transcript);
    setResponse(reply);
  };

  return (
    <div className="App">
      <h1>🧠 AI Knowledge Guider</h1>
      <Avatar3D />
      <textarea
        placeholder="Ask me anything..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        rows={4}
        cols={50}
      />
      <br />
      <button onClick={handleAsk}>Ask</button>
      <VoiceChat onTranscription={handleVoiceInput} />
      <div className="response-box">
        <strong>Agent:</strong> {response}
      </div>
    </div>
  );
}

export default App;
