const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  role: { type: String, required: true },
  fullName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  organization: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobile: { type: String },
  topics: { type: Object }, // for students
  degree: { type: String }, // for mentors
  year: { type: String }, // for mentors
  institution: { type: String }, // for mentors
  domains: { type: Object }, // for mentors
  verificationDocumentUrl: { type: String },
  profilePicture: { type: String },
  notifications: [{
    type: { type: String }, // e.g. "LIKE"
    actorEmail: String,
    actorName: String,
    postId: String,
    postTextSnippet: String,
    read: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
  }]
}, {
  timestamps: true
});

userSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    delete ret.password; // Never expose password hash
  }
});

module.exports = mongoose.model('User', userSchema);
