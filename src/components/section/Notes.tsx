import { useContext } from "react";

import { ContextProps, NoteContext, NotesProps } from "../../App";
import { ThumbNote } from "../utils/helper";

const Notes = () => {
  const { notes, setSearchTerm, searchTerm } =
    useContext<ContextProps>(NoteContext);

  const requiredNotes = searchTerm
    ? notes.filter((note: NotesProps) =>
        note.title.toLowerCase().includes(searchTerm),
      )
    : notes;

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="mb-12 text-xl font-bold">
            All Notes
            <span className="px-4">|</span>
            <span className="text-base font-medium text-gray-400">
              {requiredNotes.length} Notes
            </span>
          </h2>
          {requiredNotes?.length < notes.length ? (
            <button
              onClick={() => setSearchTerm("")}
              className="py-2 underline hover:text-amber-700"
            >
              Show All
            </button>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center gap-8">
          {requiredNotes.length > 0
            ? requiredNotes.map((note: NotesProps) => (
                <ThumbNote
                  id={note.id}
                  key={note.id}
                  body={note.body}
                  date={note.date}
                  title={note.title}
                />
              ))
            : null}
        </div>
      </div>
    </section>
  );
};

export default Notes;
