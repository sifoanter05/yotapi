const express = require("express");
const ytdl = require("ytdl-core");
const app = express();

app.get("/", (req, res) => {
  res.send("✅ API شغال! أرسل رابط فيديو عبر /download?url=...");
});

app.get("/download", async (req, res) => {
  try {
    const videoURL = req.query.url;
    if (!videoURL) {
      return res.status(400).send("❌ يرجى إدخال رابط فيديو");
    }

    const info = await ytdl.getInfo(videoURL);
    res.header(
      "Content-Disposition",
      attachment; filename="${info.videoDetails.title}.mp4"
    );

    ytdl(videoURL, { format: "mp4" }).pipe(res);
  } catch (err) {
    console.error("❌ خطأ أثناء التحميل:", err);
    res.status(500).send("حدث خطأ أثناء التحميل");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(🚀 السيرفر شغال على البورت ${PORT});
});
