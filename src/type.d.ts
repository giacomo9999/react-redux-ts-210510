interface NewNoteInputProps {
  addNote(note: string): void;
}

interface NotesState {
  notes: string[];
}

type Action = { type: string; payload: string };
