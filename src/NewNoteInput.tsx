import React, { ChangeEvent, ReactHTMLElement } from "react";

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = React.useState("");

  const updateNote = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNote(e.target.value);
  };

  const onAddNoteClick = () => {
    addNote(note);
    setNote("");
  };

  return (
    <div>
      <input
        onChange={updateNote}
        type="text"
        value={note}
        name="note"
        placeholder="Note"
      />
      <button onClick={onAddNoteClick}>Add Note</button>
    </div>
  );
};
