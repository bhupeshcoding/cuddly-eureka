// // import React, { useState, useEffect } from "react";
// // import "./HiringPortal.css";

// // const StickyNotes = () => {
// //   const [notes, setNotes] = useState([]);
// //   const [newNote, setNewNote] = useState("");
// //   const [editIndex, setEditIndex] = useState(null);

// //   // Load notes from localStorage on component mount
// //   useEffect(() => {
// //     const storedNotes = JSON.parse(localStorage.getItem("stickyNotes")) || [];
// //     setNotes(storedNotes);
// //   }, []);

// //   // Handle creating a new note
// //   const handleCreateNote = () => {
// //     if (!newNote.trim()) return; // Prevent empty notes
// //     const note = {
// //       content: newNote,
// //       timestamp: new Date().toLocaleString(),
// //     };
// //     const updatedNotes = [...notes, note];
// //     setNotes(updatedNotes);
// //     localStorage.setItem("stickyNotes", JSON.stringify(updatedNotes));
// //     setNewNote("");
// //   };

// //   // Handle editing a note
// //   const handleEditNote = (index) => {
// //     setEditIndex(index);
// //     setNewNote(notes[index].content);
// //   };

// //   // Handle saving an edited note
// //   const handleSaveEdit = () => {
// //     if (!newNote.trim()) return;
// //     const updatedNotes = [...notes];
// //     updatedNotes[editIndex] = {
// //       ...updatedNotes[editIndex],
// //       content: newNote,
// //     };
// //     setNotes(updatedNotes);
// //     localStorage.setItem("stickyNotes", JSON.stringify(updatedNotes));
// //     setNewNote("");
// //     setEditIndex(null);
// //   };

// //   // Handle deleting a note
// //   const handleDeleteNote = (index) => {
// //     const updatedNotes = notes.filter((_, i) => i !== index);
// //     setNotes(updatedNotes);
// //     localStorage.setItem("stickyNotes", JSON.stringify(updatedNotes));
// //   };

// //   return (
// //     <div className="sticky-notes-container">
// //       <h2>Sticky Notes</h2>
// //       <div className="new-note">
// //         <textarea
// //           value={newNote}
// //           onChange={(e) => setNewNote(e.target.value)}
// //           placeholder="Write your sticky note here..."
// //         />
// //         <button
// //           onClick={editIndex !== null ? handleSaveEdit : handleCreateNote}
// //         >
// //           {editIndex !== null ? "Save Edit" : "Create Note"}
// //         </button>
// //       </div>
// //       <div className="notes-list">
// //         {notes.map((note, index) => (
// //           <div key={index} className="sticky-note">
// //             <p>{note.content}</p>
// //             <div className="note-footer">
// //               <span>{note.timestamp}</span>
// //               <button onClick={() => handleEditNote(index)}>Edit</button>
// //               <button onClick={() => handleDeleteNote(index)}>Delete</button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default StickyNotes;

// import React, { useState } from "react";
// // jsPDF can be used for PDF generation, but this requires an external library
// // import jsPDF from 'jspdf';

// const StickyNotes = () => {
//   const [newNote, setNewNote] = useState("");

//   // Handle creating and downloading the note as a .txt file
//   const handleSaveAsTxt = () => {
//     if (!newNote.trim()) return;

//     // Create a Blob from the sticky note content
//     const blob = new Blob([newNote], { type: "text/plain;charset=utf-8" });

//     // Create a link element to trigger the download
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = "sticky-note.txt"; // The name of the file to be downloaded
//     document.body.appendChild(link);
//     link.click(); // Programmatically click the link to trigger the download
//     document.body.removeChild(link); // Clean up
//     setNewNote(""); // Clear the text area
//   };

//   // Handle creating and downloading the note as a .docx file
//   const handleSaveAsDocx = () => {
//     if (!newNote.trim()) return;

//     // Create the basic structure for the .docx file
//     const zip = new PizZip();
//     const doc = new Docxtemplater(zip);

//     // Use a simple template with the sticky note content
//     const docContent = `
//       <w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
//         <w:body>
//           <w:p>
//             <w:r>
//               <w:t>${newNote}</w:t>
//             </w:r>
//           </w:p>
//         </w:body>
//       </w:document>
//     `;

//     // Load document content and generate file
//     zip.file("word/document.xml", docContent);

//     const out = zip.generate({ type: "blob" });

//     // Trigger the download
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(out);
//     link.download = "sticky-note.docx"; // The name of the file to be downloaded
//     link.click();
//     setNewNote(""); // Clear the text area
//   };

//   // Handle creating and downloading the note as a .pdf file
//   const handleSaveAsPdf = () => {
//     if (!newNote.trim()) return;

//     const doc = new jsPDF(); // jsPDF object for PDF generation

//     // Add the sticky note content to the PDF
//     doc.text(newNote, 10, 10); // Position text at (10,10)

//     // Trigger download
//     doc.save("sticky-note.pdf"); // The name of the PDF to be downloaded
//     setNewNote(""); // Clear the text area
//   };

//   return (
//     <div className="sticky-notes-container">
//       <h2>Sticky Notes</h2>
//       <div className="new-note">
//         <textarea
//           value={newNote}
//           onChange={(e) => setNewNote(e.target.value)}
//           placeholder="Write your sticky note here..."
//         />
//         <div>
//           <button onClick={handleSaveAsTxt}>Save as Text</button>
//           <button onClick={handleSaveAsDocx}>Save as Word</button>
//           <button onClick={handleSaveAsPdf}>Save as PDF</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StickyNotes;

import { useState } from "react";
import { jsPDF } from "jspdf"; // Ensure to install jsPDF using `npm install jspdf`
import "./StickyNotes.css";

const StickyNotes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  // Handle adding a new sticky note
  const handleAddNote = () => {
    if (!newNote.trim()) return; // Prevent empty notes
    const note = {
      content: newNote,
      id: Date.now(), // Unique ID based on timestamp
    };
    setNotes([...notes, note]);
    setNewNote("");
  };

  // Handle downloading a note as a .txt file
  const handleSaveAsTxt = (noteContent) => {
    const blob = new Blob([noteContent], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "sticky-note.txt"; // The name of the file to be downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up
  };

  // Handle deleting a sticky note
  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  // Handle downloading a note as a .pdf file
  const handleSaveAsPdf = (noteContent) => {
    const doc = new jsPDF(); // jsPDF object for PDF generation
    doc.text(noteContent, 10, 10); // Add content at position (10, 10)
    doc.save("sticky-note.pdf"); // Trigger download
  };

  return (
    <div className="sticky-notes-container">
      <h2>Sticky Notes</h2>
      <div className="new-note">
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Write your sticky note here..."
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
      <div className="notes-list">
        {notes.map((note) => (
          <div key={note.id} className="sticky-note">
            <p>{note.content}</p>
            <div className="note-actions">
              <button onClick={() => handleSaveAsTxt(note.content)}>
                Download as Text
              </button>
              <button onClick={() => handleSaveAsPdf(note.content)}>
                Download as PDF
              </button>
              <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickyNotes;

// import React, { useState } from "react";

// const StickyNotes = () => {
//   const [notes, setNotes] = useState([]);
//   const [newNote, setNewNote] = useState("");

//   // Handle adding a new sticky note
//   const handleAddNote = () => {
//     if (!newNote.trim()) return;
//     const note = {
//       id: Date.now(), // Unique ID for each note
//       content: newNote,
//     };
//     setNotes([...notes, note]);
//     setNewNote("");
//   };

//   // Handle deleting a sticky note
//   const handleDeleteNote = (id) => {
//     const updatedNotes = notes.filter((note) => note.id !== id);
//     setNotes(updatedNotes);
//   };

//   // Handle saving a note as a .txt file
//   const handleSaveAsTxt = (noteContent) => {
//     const blob = new Blob([noteContent], { type: "text/plain;charset=utf-8" });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = "sticky-note.txt";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="sticky-notes-container">
//       <h2>Sticky Notes</h2>
//       <div className="new-note">
//         <textarea
//           value={newNote}
//           onChange={(e) => setNewNote(e.target.value)}
//           placeholder="Write your sticky note here..."
//         />
//         <button onClick={handleAddNote}>Add Note</button>
//       </div>
//       <div className="notes-list">
//         {notes.map((note) => (
//           <div
//             key={note.id}
//             className="sticky-note"
//             style={{
//               backgroundColor: "#FFEB3B", // Yellow sticky note color
//               padding: "10px",
//               margin: "10px",
//               borderRadius: "8px",
//               boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <p>{note.content}</p>
//             <div className="note-footer">
//               <button onClick={() => handleSaveAsTxt(note.content)}>
//                 Save as Text
//               </button>
//               <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StickyNotes;
