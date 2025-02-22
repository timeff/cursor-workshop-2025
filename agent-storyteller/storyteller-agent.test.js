const SECONDS = 1000;
jest.setTimeout(20 * SECONDS);

const StorytellerAgent = require("./storyteller-agent");
const StoryEvaluatorAgent = require("./story-evaluator-agent");

describe("StorytellerAgent", () => {
  const MATCH_THRESHOLD = 0.8;
  let storytellerAgent = new StorytellerAgent();
  let storyEvaluatorAgent = new StoryEvaluatorAgent();

  test("should generate a story that matches the given topic with score above threshold", async () => {
    // Mock the OpenAI response

    const topics = ["space exploration", "guitarist", "godzilla"];

    for (const topic of topics) {
      const story = await storytellerAgent.generateStory(topic);
      const score = await storyEvaluatorAgent.evaluateStoryMatch(topic, story);

      console.log("Topic: ", topic);
      console.log("Story: ", story);
      console.log("Score: ", score);
      expect(score).toBeGreaterThan(MATCH_THRESHOLD);
    }
  });
});
