const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  topicName: { type: String, required: true },
  unitNumber: { type: String },
  year: { type: String },
  departmentId: { type: String },
  uploaderEmail: { type: String },
  filename: { type: String },
  originalName: { type: String },
  filePath: { type: String }
}, {
  timestamps: true
});

// Since the existing frontend occasionally looks for 'id' natively (often in Mongoose it's '_id'),
// we can ensure 'id' is virtually mapped if needed, but react-router keys usually adapt.
noteSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

module.exports = mongoose.model('Note', noteSchema);
