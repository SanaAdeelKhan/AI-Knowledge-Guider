import { BaseAgent } from "./baseAgent.js";

export class MathAgent extends BaseAgent {
  constructor() {
    super("MathAgent", "math");
  }

  respond(message) {
    if (message.includes("2+2") || message.includes("add")) {
      return "2 + 2 is 4.";
    }

    if (message.match(/\d+\s*\+\s*\d+/)) {
      try {
        const result = eval(message);
        return `🧮 Answer: ${result}`;
      } catch {
        return "❌ I couldn't compute that expression.";
      }
    }

    return "🧠 This seems like a math question. Try asking me to calculate something!";
  }
}
