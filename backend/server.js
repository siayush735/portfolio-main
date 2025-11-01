const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();
const app = express();
app.use(cors);
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(()=>
  console.log("MongoDB connected...")
).catch(err => console.log(err));

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createAt: {type: Date, default: Date.now},
});

const Contact = mongoose.model('Contact',ContactSchema);

app.post('/api/contact', async (req,res)=>{
  const {name, email, message} = req.body;
  try{
    await Contact.create({ name,email,message});
  }
  catch(err){
    console.log("Error ",err);
  }
})