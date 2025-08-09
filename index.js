const express = require("express");
const ytdl = require("ytdl-core");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🚀 API is running successfully!");
});

app.get("/download", async (req, res) => {
  const videoURL = req.query.url;
  if (!videoURL) {
    return res.status(400).send("❌ Please provide a YouTube URL as ?url=");
  }

  try {
    const info = await ytdl.getInfo(videoURL);
    res.header(
      "Content-Disposition",
      attachment; filename="${info.videoDetails.title}.mp4"
    );
    ytdl(videoURL, { format: "mp4" }).pipe(res);
    console.log("✅ Download started for:", info.videoDetails.title);
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Error downloading video");
  }
});

app.listen(PORT, () => {
  console.log(✅ Server is running on port ${PORT});
});
