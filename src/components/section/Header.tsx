import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { string, z } from "zod";

import { useContext, useEffect, useState } from "react";
import { NoteContext } from "../../App";
import { logo } from "../utils/helper";

const searchSchema = z.object({
  searchInput: string().min(2, {
    message: "Must be atleast 2 characters long!",
  }),
});

export type SearchProps = z.infer<typeof searchSchema>;

const Header = () => {
  const [isSticky, setIsSticky] = useState("");

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchProps>({ resolver: zodResolver(searchSchema) });

  const { setSearchTerm } = useContext(NoteContext);

  const submitHandler = (data: SearchProps) => {
    setSearchTerm(data.searchInput);
    reset();
  };

  const stickyHandler = () => {
    const stickyClass = window.scrollY > 120 ? "sticky" : "";
    setIsSticky(stickyClass);
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyHandler);
    return () => window.removeEventListener("scroll", stickyHandler);
  }, []);

  const sticker = `${isSticky} bg-white`;

  return (
    <header className={sticker}>
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-between py-4">
          <Link to="/">
            <img src={logo} width={100} alt="notable" />
          </Link>

          <form
            onSubmit={handleSubmit(submitHandler)}
            className="flex items-center gap-2"
          >
            <label htmlFor="searchInput">
              <input
                autoFocus
                type="text"
                id="searchInput"
                {...register("searchInput")}
                placeholder="Search your note here..."
                className="mr-2 rounded-md border-2 border-amber-200 px-4 py-2 focus:outline-amber-500"
              />
              <p className="text-xs text-red-600">
                {errors?.searchInput?.message}
              </p>
            </label>
            <button
              type="submit"
              className="cursor-pointer rounded-md border-2 border-amber-500 bg-amber-500 px-6 py-2  transition-colors duration-300 ease-in-out hover:border-amber-300 hover:bg-amber-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
