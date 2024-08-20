const mongoose = require('mongoose');

// Define a schema for your data
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Name is a required field
  },
  email: {
    type: String,
    required: true, // Email is a required field
    unique: true, // Ensure email addresses are unique
  },
  subject: {
    type: String,
    required: true, // Subject is a required field
  },
  message: {
    type: String,
    required: true, // Message is a required field
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the current date and time when the document is created
  },
});

// Create a Mongoose model based on the schema
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact; // Export the model
