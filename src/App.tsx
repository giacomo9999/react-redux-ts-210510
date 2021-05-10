import { NewNoteInput } from "./NewNoteInput";

function App() {
  return (
    <div className="container-outer">
      <h1>APP</h1>
      <>
        <NewNoteInput addNote={alert} />
        <br />
        <hr />
        <ul>
          <li>Some note</li>
        </ul>
      </>
    </div>
  );
}

export default App;
