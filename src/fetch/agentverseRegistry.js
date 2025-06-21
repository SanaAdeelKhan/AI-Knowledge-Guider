import { ScienceAgent } from "./scienceAgent.js";
import { HistoryAgent } from "./historyAgent.js";

const agents = {
  science: new ScienceAgent(),
  history: new HistoryAgent(),
};

export function getAgent(domain) {
  return agents[domain] || null;
}
