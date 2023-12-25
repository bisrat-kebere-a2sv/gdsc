import React, { useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "My first note",
      content: "This is my first note",
    },
  ]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editMode, setEditMode] = useState(false)
  const [edited, setEdited] = useState(null)

  const addNote = () => {
    alert("Note added");
    if (!title || !content) return;
    setNotes([
      ...notes,
      {
        id: notes.length + 1,
        title,
        content,
      },
    ]);
    setTitle("");
    setContent("");
  };

  const handleDelete = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  const handleEdit = (note) => {
    setEditMode(true)
    setEdited(note.id)
    setTitle(note.title)
    setContent(note.content)
  }

  const handleEditSubmit = () => {
    alert("Edit")
    if (!title || !content) return;
    const newNotes = notes.map((note) => {
      if (note.id === edited){
        return {
          id: note.id,
          title,
          content
        }
      }
      return note
    })
    setNotes(newNotes)
    setEditMode(false)
    setEdited(null)
    setTitle("")
    setContent("")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content){
      alert("Please fill in all fields")
      return;
    };

    if (editMode){
      handleEditSubmit()
    }else{
      addNote()
    }
  }

  return (
    <>
      <h1>My Note App</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label> <br />
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /> <br />
        <label htmlFor="note">Note</label> <br />
        <textarea
          id="note"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={5}
          cols={20}
        />
        <br />
        <button type="submit">
          {editMode ? 'Edit Note' : 'Add Note'}
        </button>
      </form>
      {notes.map((note) => (
        <div key={note.id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <button className="btn" type="button" onClick={()=> handleDelete(note.id)}>Delete</button>
          <button type="button" onClick={()=> handleEdit(note)}>Edit</button>
        </div>
      ))}
    </>
  );
}

export default App;
