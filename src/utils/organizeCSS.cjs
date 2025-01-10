const {
  glob,
  globSync,
  globStream,
  globStreamSync,
  Glob,
} = require('glob');

const fs = require("fs");
const path = require("path");

/**
 * getStoryFiles
 * @description - Fetches all story files in the stories directory
 * @returns {Promise<string[]>} - Returns an array of story files
 */
const getStoryFiles = async () => {
  try {
    const stories = await glob(["stories/**/*.{ts,tsx}"], { ignore: ["stories/**/*.stories.{ts,tsx}"] });
    return stories;
  } catch (error) {
    console.error(error);
  }

  console.log("Finished fetching story files!");
}

/**
 * getStoriesContent
 * @description - Fetches the content of all story files
 * @returns {Promise<string[]>} - Returns an array of story content 
 */
const getStoriesContent = async () => {
  const stories = await getStoryFiles();
  console.log(stories);

  // Fetch the content of all story files
  const storiesContent = stories.map(async (story) => {
    try {
      const content = fs.readFileSync(story, "utf-8");
      if (content.includes("@/src/utils/cn") || content.includes("cn(")) {
        console.log("Story contains classnames utility!");
        return { story, content };
      }
    } catch (error) {
      console.error(error);
    }
  });
  return storiesContent;
}

const organizeCSS = async () => {
  const storiesContent = await getStoriesContent();
}

function __main__() {
  organizeCSS();
}

__main__();