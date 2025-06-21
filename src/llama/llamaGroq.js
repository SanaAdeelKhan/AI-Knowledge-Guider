export async function fetchLlamaReply(userMessage) {
  const apiKey = process.env.REACT_APP_GROQ_API_KEY || "your-groq-key-here"; // replace if not using .env

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "llama3-8b-8192",
      messages: [
        { role: "system", content: "You are a helpful educational assistant. Reply clearly and simply." },
        { role: "user", content: userMessage }
      ],
      temperature: 0.7,
      max_tokens: 1024
    })
  });

  if (!response.ok) {
    throw new Error("LLaMA API call failed");
  }

  const data = await response.json();
  return data.choices[0].message.content;
}
