const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  authorName: { type: String, required: true },
  authorHandle: { type: String, required: true },
  authorEmail: { type: String },
  authorAvatar: { type: String },
  text: { type: String },
  tag: { type: String },
  imageFile: { type: String },
  likes: [{ type: String }],
  comments: { type: Number, default: 0 },
  shares: { type: Number, default: 0 }
}, {
  timestamps: true
});

postSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

module.exports = mongoose.model('Post', postSchema);
