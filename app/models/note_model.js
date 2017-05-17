import mongoose, { Schema } from 'mongoose';

// create a PostSchema with a title field
const NotesSchema = new Schema({
  title: String,
  x: Number,
  y: Number,
  zIndex: Number,
  text: String,
  draggable: Boolean,
});

// create PostModel class from schema
const NotesModel = mongoose.model('Post', NotesSchema);

export default NotesModel;
