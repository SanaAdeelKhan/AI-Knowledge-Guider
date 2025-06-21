import { BaseAgent } from "./baseAgent.js";

export class HistoryAgent extends BaseAgent {
  constructor() {
    super("HistoryAgent", "history");
  }

  respond(message) {
    if (message.toLowerCase().includes("mughal")) {
      return "The Mughal Empire ruled most of the Indian subcontinent during the 16th and 17th centuries.";
    }
    return super.respond(message);
  }
}
