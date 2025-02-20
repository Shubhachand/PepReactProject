import React, { useState, useEffect } from "react";
import "./styles/Notepad.css";

const Notepad = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleSave = () => {
    if (!currentNote.trim()) return;

    if (editId) {
      setNotes(notes.map(note => note.id === editId ? { ...note, text: currentNote } : note));
      setEditId(null);
    } else {
      setNotes([...notes, { id: Date.now(), text: currentNote }]);
    }
    setCurrentNote("");
  };

  const handleEdit = (id, text) => {
    setCurrentNote(text);
    setEditId(id);
  };

  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="notepad-container">
      <div className="notes-grid">
        {notes.map(note => (
          <div key={note.id} className="note-card">
            <p>{note.text}</p>
            <div className="note-footer">
              <span>{new Date().toLocaleDateString()}</span>
              <div className="note-actions">
                <button className="edit-btn" onClick={() => handleEdit(note.id, note.text)}>✎</button>
                <button className="delete-btn" onClick={() => handleDelete(note.id)}>✖</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="notepad-input">
        <textarea
          value={currentNote}
          onChange={(e) => setCurrentNote(e.target.value)}
          placeholder="Write your note here..."
        />
        <button onClick={handleSave}>{editId ? "Update" : "Save"}</button>
      </div>
    </div>
  );
};

export default Notepad;