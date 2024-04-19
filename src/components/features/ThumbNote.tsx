import { Link } from "react-router-dom";
import { NotesProps } from "../../App";

const ThumbNote = ({ id, title, body, date }: NotesProps) => {
  return (
    <div className="flex h-60 w-[23%] flex-col justify-between overflow-hidden rounded-xl bg-white p-5 shadow-lg">
      <div className="flex flex-col">
        <div className="flex flex-row items-start justify-between gap-4">
          <Link to={`notes/${id}`}>
            <h3 className="mb-2 line-clamp-2 font-semibold transition-colors duration-300 ease-in-out hover:text-amber-600">
              {title}
            </h3>
          </Link>
          <Link
            to={`notes/${id}/edit`}
            className="translate-y-1 transition-colors duration-300 ease-in-out hover:fill-amber-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              viewBox="0 0 576 512"
            >
              <path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z" />
            </svg>
          </Link>
        </div>
        <p className="mt-4 line-clamp-3 text-sm text-gray-500">{body}</p>
      </div>
      <div className="rounded-sm bg-amber-400 px-2 py-1 text-xs">{date}</div>
    </div>
  );
};

export default ThumbNote;
