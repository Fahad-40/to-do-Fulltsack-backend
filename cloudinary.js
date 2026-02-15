const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dmwly8j5p",
  api_key: "592929665472151",
  api_secret: "qhJ6SMV5PoyMIGuIwsG1xjG_hyg",
});

module.exports = cloudinary;