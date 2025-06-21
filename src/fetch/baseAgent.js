export class BaseAgent {
  constructor(name, domain) {
    this.name = name;
    this.domain = domain;
    this.memory = [];
  }

  receive(message) {
    this.memory.push(message);
    return this.respond(message);
  }

  respond(message) {
    return `Hello from ${this.name}. I received your message: "${message}"`;
  }
}
