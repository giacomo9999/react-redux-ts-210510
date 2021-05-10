import { NewNoteInput } from "./NewNoteInput";
import { useSelector, useDispatch } from "react-redux";
import { ADD_NOTE } from "./actions/ActionTypes";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();

  const addNote = (note: string) => {
    dispatch({ type: ADD_NOTE, payload: note });
  };
  
  return (
    <div className="container-outer">
      <h1>APP</h1>
      <>
        <NewNoteInput addNote={addNote} />
        <br />
        <hr />
        <ul>
          {notes.map((note) => (
            <li>{note}</li>
          ))}
        </ul>
      </>
    </div>
  );
}

export default App;
