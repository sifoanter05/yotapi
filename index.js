const express = require("express");
const ytdl = require("ytdl-core");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("✅ YouTube API is running");
});

// Endpoint لتحميل الفيديو MP4
app.get("/video", async (req, res) => {
  try {
    const videoURL = req.query.url;
    if (!videoURL) return res.status(400).json({ error: "URL is required" });

    const info = await ytdl.getInfo(videoURL);
    res.header("Content-Disposition", attachment; filename="${info.videoDetails.title}.mp4");
    ytdl(videoURL, { format: "mp4" }).pipe(res);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint لتحميل الصوت MP3
app.get("/audio", async (req, res) => {
  try {
    const videoURL = req.query.url;
    if (!videoURL) return res.status(400).json({ error: "URL is required" });

    const info = await ytdl.getInfo(videoURL);
    res.header("Content-Disposition", attachment; filename="${info.videoDetails.title}.mp3");
    ytdl(videoURL, { filter: "audioonly", quality: "highestaudio" }).pipe(res);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(🚀 Server running on port ${PORT}));
