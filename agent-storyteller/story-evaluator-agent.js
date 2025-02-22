const OpenAI = require("openai");

class StoryEvaluatorAgent {
  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async evaluateStoryMatch(topic, story) {
    try {
      const response = await this.openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a story evaluation expert. Given a topic and a story, evaluate how well the story matches the topic. " +
              "Return only a number between 0 and 1, where 0 means completely unrelated and 1 means perfectly matched. " +
              "Consider theme, content, and relevance in your evaluation.",
          },
          {
            role: "user",
            content: `Topic: "${topic}"\nStory: "${story}"\n\nRate how well the story matches the topic from 0 to 1:`,
          },
        ],
        max_tokens: 10,
        temperature: 0.3,
      });

      const confidence = parseFloat(response.choices[0].message.content.trim());
      return isNaN(confidence) ? 0 : Math.max(0, Math.min(1, confidence));
    } catch (error) {
      console.error("Error evaluating story match:", error);
      throw error;
    }
  }
}

module.exports = StoryEvaluatorAgent;
