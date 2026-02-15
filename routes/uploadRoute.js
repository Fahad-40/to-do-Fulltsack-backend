import express from "express";
import multer from "multer";
import cloudinary from "../cloudinary.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    cloudinary.uploader
      .upload_stream({ folder: "todo-app" }, (error, result) => {
        if (error) return res.status(500).json({ error: error.message });
        res.json({ imageUrl: result.secure_url });
      })
      .end(file.buffer);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
