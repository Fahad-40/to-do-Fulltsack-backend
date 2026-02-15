import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const file = req.file;

    cloudinary.uploader.upload_stream(
      { folder: "todo-app" },
      (error, result) => {
        if (error) return res.status(500).json({ error });
        res.json({ imageUrl: result.secure_url });
      }
    ).end(file.buffer);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;





// import express from "express";
// const router = express.Router();
// const upload = require("../multer");
// const cloudinary = require("../cloudinary");

// router.post("/upload", upload.single("image"), async (req, res) => {
//   try {
//     const result = await cloudinary.uploader.upload_stream(
//       { folder: "ecommerce" },
//       (error, result) => {
//         if (error) return res.status(500).json({ error });
//         res.json({ imageUrl: result.secure_url });
//       }
//     );

//     result.end(req.file.buffer);

//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


// export default router;