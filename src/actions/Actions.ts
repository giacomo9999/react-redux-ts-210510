import { ADD_NOTE } from "./ActionTypes";

export const addNote = (newNote: string) => {
  return { type: ADD_NOTE, payload: newNote };
};
