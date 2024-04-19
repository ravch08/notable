import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { NoteContext } from "../../App";

const Note = () => {
  const { id } = useParams();
  const { notes } = useContext(NoteContext);

  const selectedNote = notes?.find((item) => item.id === id);

  return (
    <main>
      <div className="container mx-auto mb-24">
        <Link to="/" className="my-12 flex items-center gap-2 px-4 underline">
          <svg
            fill="currentColor"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L12.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M4.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L6.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
          Back to Notes
        </Link>
        <div className="mt-12 flex w-full flex-col justify-between gap-4 bg-white px-5 py-8">
          <div className="flex items-center justify-between">
            <h3 className="mb-4 line-clamp-2 text-3xl font-semibold transition-colors duration-500 ease-in-out hover:text-amber-600">
              {selectedNote?.title}
            </h3>
            <Link
              to="edit"
              className="flex items-center justify-between gap-2 transition-colors duration-300 ease-in-out hover:fill-amber-600"
            >
              <svg
                width="20"
                viewBox="0 0 576 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z" />
              </svg>
              EDIT
            </Link>
          </div>
          <figure className="flex h-[500px] w-full items-center justify-center overflow-hidden">
            <img
              src={selectedNote?.imgSrc}
              alt={selectedNote?.title}
              className="w-full"
            />
          </figure>
          <p className="mb-4 text-sm text-gray-500">{selectedNote?.body}</p>

          <div className=" rounded-sm bg-amber-400 px-2 py-1 text-xs">
            {selectedNote?.date}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Note;
