const fs = require("fs");
const fetch = require("node-fetch");

async function downloadFile(
  videoId,
  path,
  overwrite = false,
  progressCallback = null
) {
  if (fs.existsSync(path) && !overwrite) {
    throw new Error("Output file already exists.");
  }

  const baseQuery = `[{"operationName":"VideoCommentsByOffsetOrCursor","variables":{},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"b70a3591ff0f4e0313d126c6a1502d79a1c02baebb288227c582044aa76adf6a"}}}]`;
  let nextCursor = null;
  let segmentCount = 0;
  let firstComment = null;
  let lastComment = null;
  let finishedDownload = false;

  const writer = fs.createWriteStream(path, { encoding: "utf8" });
  writer.write("[");

  try {
    do {
      const queryVariables = [
        `"videoID":"${videoId}"`,
        nextCursor == null
          ? `"contentOffsetSeconds":0`
          : `"cursor":"${nextCursor}"`,
      ];
      const response = await fetch("https://gql.twitch.tv/gql", {
        method: "POST",
        body: JSON.stringify({
          query: baseQuery.replace(
            '"variables":{}',
            `\"variables\":{${queryVariables.join(",")}}`
          ),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();
      nextCursor = null;
      responseData[0].data.video.comments.edges.forEach((commentEdge) => {
        const comment = commentEdge.node;
        writer.write(JSON.stringify(comment));
        firstComment = firstComment || comment;
        lastComment = comment;
        nextCursor = commentEdge.cursor;
      });
      segmentCount++;
      if (progressCallback) {
        progressCallback(segmentCount, tryGetContentOffset(lastComment));
      }
    } while (nextCursor !== null);

    writer.write("]");
    finishedDownload = true;
  } finally {
    writer.end();
    if (!finishedDownload) {
      try {
        fs.unlinkSync(path);
      } catch (error) {}
    }
  }

  if (firstComment !== null) {
    try {
      const firstMessage = new RechatMessage(firstComment);
      const lastMessage = new RechatMessage(lastComment);
      fs.utimesSync(
        path,
        firstMessage.createdAt - firstMessage.contentOffset,
        lastMessage.createdAt
      );
    } catch (error) {
      throw new Error("Unable to set file created/modified time.");
    }
  }
}

function tryGetContentOffset(comment) {
  // Implement your logic to get the content offset from the comment
  return null;
}

// Example usage
const videoId = 12345;
const path = "comments.json";
downloadFile(videoId, path);
