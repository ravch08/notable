import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link
      to="new-note"
      className="flex h-20 w-40 cursor-pointer flex-row items-center justify-center rounded-lg bg-white shadow-md transition-colors duration-300 ease-in-out hover:bg-amber-100"
    >
      <div className="flex flex-row gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          viewBox="0 0 512 512"
        >
          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z" />
        </svg>
        <span>Create Note</span>
      </div>
    </Link>
  );
};

export default Button;
