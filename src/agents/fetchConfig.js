import { historyAgent } from "./historyAgent";

export async function routeToAgent(userInput) {
  if (!userInput) return "🗣️ Please enter a question.";

  const lower = userInput.toLowerCase();

  if (
    lower.includes("history") ||
    lower.includes("past") ||
    lower.includes("world war") ||
    lower.includes("revolution") ||
    lower.includes("ancient")
  ) {
    return await historyAgent(userInput);
  }

  return "🤖 I'm not sure which agent should handle that. Try asking something historical!";
}
