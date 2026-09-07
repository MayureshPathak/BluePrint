const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const Note = require('../models/Note');

// Get all notes, optionally filter by year and departmentId
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    
    let filteredNotes = notes;
    if (req.query.year) {
      filteredNotes = filteredNotes.filter(note => note.year === req.query.year);
    }
    if (req.query.departmentId) {
      filteredNotes = filteredNotes.filter(note => String(note.departmentId) === String(req.query.departmentId));
    }
    
    res.json(filteredNotes);
  } catch (error) {
    console.error('Error fetching notes:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Upload a new note
// Expects multipart/form-data with a file and fields: topicName, unitNumber, year, departmentId, email (uploader)
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { topicName, unitNumber, year, departmentId, uploaderEmail } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const newNote = new Note({
      topicName: topicName,
      unitNumber: unitNumber,
      year: year,
      departmentId: departmentId,
      uploaderEmail: uploaderEmail,
      filename: req.file.filename,
      originalName: req.file.originalname,
      filePath: `/uploads/${req.file.filename}`
    });

    await newNote.save();
    
    res.status(201).json({ message: 'Note uploaded successfully', note: newNote });
  } catch (error) {
    console.error('Error uploading note:', error);
    res.status(500).json({ message: 'Internal server error during upload', error: error.message });
  }
});

// Delete a note (only by uploader)
router.delete('/:id', async (req, res) => {
  try {
    const email = req.query.email;
    const noteId = req.params.id;
    const fs = require('fs');
    const path = require('path');

    console.log(`Delete request for note ${noteId} by ${email}`);

    if (!email) return res.status(400).json({ message: 'Email is required' });

    const note = await Note.findById(noteId);
    if (!note) return res.status(404).json({ message: 'Note not found' });

    if (note.uploaderEmail !== email) {
      console.warn(`Unauthorized note delete attempt: ${email} tried to delete note by ${note.uploaderEmail}`);
      return res.status(403).json({ message: 'You can only delete your own notes' });
    }

    // Delete the physical file
    const filePath = path.join(__dirname, '..', note.filePath);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`Physical file deleted: ${filePath}`);
    }

    await Note.findByIdAndDelete(noteId);
    console.log(`Note ${noteId} deleted successfully from database`);
    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error('Error deleting note:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
