// A simple example history AI responder (Professor Chrono)
export function historyAgent(question) {
  if (!question) return "Please ask a history-related question.";
  if (question.toLowerCase().includes("world war 2")) {
    return "World War 2 lasted from 1939 to 1945 and involved many countries around the world.";
  }
  return "Professor Chrono says: Let me look that up for you in the archives...";
}
