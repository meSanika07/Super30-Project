const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // Only for admin/doctor
  otp: { type: String },      // For patient OTP login
  role: { type: String, enum: ['patient', 'doctor', 'admin'], required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
