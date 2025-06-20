# AI Knowledge Guider 🧠🚀

An AI-powered 3D knowledge assistant built for the **RAISE: Qualcomm Track Hackathon**.  
Features expressive avatars, on-device AI optimization, and interactive voice-based learning.

## 💡 Core Features
- 3D avatars (Three.js or Ready Player Me)
- Voice input & responses (Web Speech / Whisper)
- Smart AI agents (Science, History, and more)
- Groq + LLaMA3 API integration
- Offline experience fallback

## 🧑‍💻 Team Roles
| Name     | Role                       |
|----------|----------------------------|
| Sana     | Team Lead + Voice & Agents |
| Noor     | Content & Personas         |
| Saad     | 3D UI & Avatar Developer   |
| Nimra    | AI Logic & Groq Integrator |

## 📁 Folder Structure
```bash
/ai-knowledge-guider
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Avatar3D.js
│   │   ├── VoiceChat.js
│   │   └── ChatUI.js
│   ├── agents/
│   │   ├── scienceAgent.js
│   │   ├── historyAgent.js
│   │   └── fetchConfig.js
│   ├── llama/
│   │   └── llamaGroq.js
│   └── App.js
├── docs/
│   ├── pitch-deck.md
│   └── architecture.png
├── sounds/
│   ├── response.mp3
│   └── fail.mp3
