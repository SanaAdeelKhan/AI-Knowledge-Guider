import { HistoryAgent } from "../fetch/historyAgent";
import { ScienceAgent } from "../fetch/scienceAgent";
import { MathAgent } from "../fetch/mathAgent";
import { GKAgent } from "../fetch/gkAgent";
import { queryASIOne } from "../fetch/asiOneBridge";  // 👈 NEW: fallback to LLM

// Instantiate each agent once
const historyAgent = new HistoryAgent();
const scienceAgent = new ScienceAgent();
const mathAgent = new MathAgent();
const gkAgent = new GKAgent();

export async function routeToAgent(userInput) {
  if (!userInput) return "🗣️ Please enter a question.";

  const lower = userInput.toLowerCase();

  // Match History topics
  if (
    lower.includes("history") ||
    lower.includes("past") ||
    lower.includes("world war") ||
    lower.includes("revolution") ||
    lower.includes("ancient") ||
    lower.includes("mughal") ||
    lower.includes("pyramid")
  ) {
    return historyAgent.receive(userInput);
  }

  // Match Science topics
  if (
    lower.includes("science") ||
    lower.includes("gravity") ||
    lower.includes("atom") ||
    lower.includes("experiment") ||
    lower.includes("solar system") ||
    lower.includes("newton") ||
    lower.includes("physics")
  ) {
    return scienceAgent.receive(userInput);
  }

  // Match Math topics
  if (
    lower.includes("math") ||
    lower.includes("calculate") ||
    lower.includes("add") ||
    lower.includes("+") ||
    lower.includes("equation") ||
    lower.includes("algebra") ||
    lower.includes("integration")
  ) {
    return mathAgent.receive(userInput);
  }

  // Match GK topics
  if (
    lower.includes("capital") ||
    lower.includes("gk") ||
    lower.includes("general knowledge") ||
    lower.includes("president") ||
    lower.includes("country") ||
    lower.includes("world")
  ) {
    return gkAgent.receive(userInput);
  }

  // 🌐 LLM Fallback using ASI:One
  return await queryASIOne(userInput);
}
