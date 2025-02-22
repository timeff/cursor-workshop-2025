require("dotenv").config();
const StorytellerAgent = require("./storyteller-agent");

async function main() {
  const storyteller = new StorytellerAgent();

  try {
    const topic = "a magical forest";
    const story = await storyteller.generateStory(topic);

    console.log("Topic:", topic);
    console.log("\nGenerated Story:");
    console.log(story);
  } catch (error) {
    console.error("Failed to generate story:", error);
  }
}

main();
