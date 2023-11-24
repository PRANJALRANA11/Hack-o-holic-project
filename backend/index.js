const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const signup=require("./model.js");
const express = require("express");
const cors = require("cors");
const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;

const app = express();

app.use(cors());
app.use(express.json());


app.post('/connect', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    let userExist = await signup.findOne({ email: email });

    if (!userExist) {
      const newUser = new signup({ name, email, password });
      const userSave = await newUser.save();
      res.status(200).json({ name: newUser.name });
    } else {
      const details=await signup.findOne({name});
      res.status(200).json({ name: details });
    }
  } catch (error) {
    res.status(400).json("Error in authentication");
  }
});
app.get('/get_users', async (req, res) => {
  try {
  

    // Check if user already exists
    let userExist = await signup.find({ }).limit(3);
    res.status(200).json(userExist)
  } catch (error) {
    res.status(400).json("Error in authentication");
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Handle photo and video upload in the same route
app.post('/post', upload.fields([{ name: 'photo', maxCount: 1 }, { name: 'video', maxCount: 1 }]), async (req, res) => {
  try {
    const photoFile = req.files['photo'] ? req.files['photo'][0] : null;
    const videoFile = req.files['video'] ? req.files['video'][0] : null;
    const { postText, name} = req.body;

    if (!photoFile && !videoFile && !postText) {
      return res.status(400).json({ message: 'At least one of photo, video, or post text is required' });
    }

    // Create an update object based on the provided fields
    const updateObject = {};
    if (photoFile) updateObject.image = photoFile.filename;
    if (videoFile) updateObject.image = videoFile.filename;
    if (postText) updateObject.message = postText;

    // Find the user by name and update the fields
    const updateResult = await signup.findOneAndUpdate({ name}, updateObject, { new: true });

    console.log(updateResult);

    res.status(200).json({
      message: 'Files uploaded and user updated successfully',
      photoFilename: photoFile ? photoFile.filename : null,
      videoFilename: videoFile ? videoFile.filename : null,
    });
  } catch (error) {
    console.error('Error during file upload and user update:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/get_details', async (req, res) => {


  try {
    const details = await signup.findOne({name:"pranjal" });

    if (!details) {
      return res.status(404).json({ message: 'Report not found' });
    }

    let fileContent;
    let contentType;

    // if (details.image === 'image') {
    //   contentType = 'image/*';
    // } else if (details.image === 'video') {
    //   contentType = 'video/*';
    // } else {
    //   return res.status(400).json({ message: 'Unsupported file type' });
    // }

    const data = await fs.readFile(`uploads/${details.image}`);
    const base64Data = data.toString('base64');
    fileContent = `data:${contentType};base64,${base64Data}`;

    const file = {
      fileContent: fileContent,
      details: details,
    };

    return res.status(200).json(file);
  } catch (error) {
    console.error('Error fetching report details:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

async function main() {
  await mongoose.connect(
    "mongodb+srv://pranjalrana:pranjalrana@cluster0.pbqxnfj.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  console.log("Database is connected");
}

main().catch((err) => console.log(err));

// Listening to the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
