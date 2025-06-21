import { BaseAgent } from "./baseAgent.js";

export class ScienceAgent extends BaseAgent {
  constructor() {
    super("ScienceAgent", "science");
  }

  respond(message) {
    if (message.toLowerCase().includes("gravity")) {
      return "Gravity is a force that pulls objects toward each other.";
    }
    return super.respond(message);
  }
}
