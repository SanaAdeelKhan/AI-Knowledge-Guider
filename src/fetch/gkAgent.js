import { BaseAgent } from "./baseAgent.js";

export class GKAgent extends BaseAgent {
  constructor() {
    super("GKAgent", "general-knowledge");
  }

  respond(message) {
    const lower = message.toLowerCase();

    if (lower.includes("capital of france")) {
      return "🇫🇷 The capital of France is Paris.";
    }

    if (lower.includes("pakistan president")) {
      return "🇵🇰 The current President of Pakistan is Asif Ali Zardari (as of 2024).";
    }

    return "🌍 I handle general knowledge! Try asking about capitals, leaders, or world facts.";
  }
}
