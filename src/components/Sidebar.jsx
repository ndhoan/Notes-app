import React from "react";
import { Delete } from "react-feather";
import classNames from "classnames";
export default function Sidebar(props) {
  const noteElements = props.notes.map((note) => {
    const noteStyle = classNames(
      "overflow-hidden w-full cursor-pointer flex justify-between items-center py-3 group",
      { "bg-slate-600": note.id === props.currentNote.id }
    );
    const noteTileStyle = classNames(
      "text-sm font-normal whitespace-nowrap overflow-hidden text-ellipsis leading-5 pl-2",
      { "text-white": note.id === props.currentNote.id },
      { "text-slate-600": note.id !== props.currentNote.id }
    );
    return (
      <div key={note.id}>
        <div
          className={noteStyle}
          onClick={() => props.setCurrentNoteId(note.id)}
        >
          <h4 className={noteTileStyle}>{note.body.split("\n")[0]}</h4>
          {note.id === props.currentNote.id && (
            <button
              onClick={(event) => props.deleteNote(event, note.id)}
              className="bg-none border-none text-red-700 mr-4 invisible group-hover:visible"
            >
              <Delete />
            </button>
          )}
        </div>
      </div>
    );
  });

  return (
    <section className="overflow-y-auto w-1/5 h-screen">
      <div className="flex justify-between items-center py-3 px-3 static top-0">
        <h3 className="text-2xl">Notes</h3>
        <button
          className="cursor-pointer bg-slate-600 border-none text-white rounded h-8 w-8"
          onClick={props.newNote}
        >
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
