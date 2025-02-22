const OpenAI = require("openai");

class StorytellerAgent {
  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async generateStory(topic) {
    try {
      const response = await this.openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a creative storyteller. Generate a single paragraph short story based on the given topic. Keep it engaging and concise.",
          },
          {
            role: "user",
            content: `Write a short story about: ${topic}`,
          },
        ],
        max_tokens: 300,
        temperature: 0.7,
      });

      return response.choices[0].message.content.trim();
    } catch (error) {
      console.error("Error generating story:", error);
      throw error;
    }
  }
}

module.exports = StorytellerAgent;
