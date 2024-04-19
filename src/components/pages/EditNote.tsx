import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";

import { NoteContext, NotesProps, notesSchema } from "../../App";
import { editNote } from "../services/api";

const EditNote = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NotesProps>({ resolver: zodResolver(notesSchema) });

  const navigate = useNavigate();

  const { id } = useParams();
  const { notes } = useContext(NoteContext);

  const selectedNote = notes?.find((item) => item.id === id);

  const handleEditNote = (data: NotesProps) => {
    console.log(data);
    editNote(data, id!);
    reset();
    navigate("/");
    location.reload();
  };

  return (
    <section aria-labelledby="Create New Note">
      <div className="container mx-auto">
        <h2 className="mx-auto mb-10 w-[80%] text-2xl font-bold">New Note</h2>

        <form
          className="mx-auto w-[80%] text-center"
          onSubmit={handleSubmit(handleEditNote)}
        >
          <div className="flex flex-row justify-between">
            <div className="form-control-half mr-4">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                id="title"
                type="text"
                {...register("title")}
                defaultValue={selectedNote?.title}
                placeholder="Enter title here..."
                className="mt-2 w-full rounded-md px-4 py-4 focus:outline-amber-500"
              />
              <p className="text-sm text-red-600">{errors?.title?.message}</p>
            </div>
            <div className="form-control-half">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input
                id="date"
                type="date"
                {...register("date")}
                className="mt-2 w-full rounded-md px-4 py-4 focus:outline-amber-500"
              />
              <p className="text-sm text-red-600">{errors?.date?.message}</p>
            </div>
          </div>

          <div className="form-control mt-6">
            <label htmlFor="imgSrc" className="form-label">
              Image URL
            </label>
            <input
              type="text"
              id="imgSrc"
              {...register("imgSrc")}
              defaultValue={selectedNote?.imgSrc}
              placeholder="Enter ImageURL here..."
              className="mt-2 w-full rounded-md px-4 py-4 focus:outline-amber-500"
            />
          </div>

          <div className="form-control mt-8">
            <label htmlFor="body" className="form-label">
              Body
            </label>
            <textarea
              id="body"
              rows={12}
              {...register("body")}
              defaultValue={selectedNote?.body}
              placeholder="Enter your content here...."
              className="mt-4 w-full rounded-md p-6 focus:outline-amber-500"
            ></textarea>
          </div>

          <div className="mt-6 flex flex-row items-center justify-end gap-4">
            <button
              type="submit"
              className="rounded-lg border-2 border-amber-600 bg-amber-600 px-8  py-2 text-white transition-colors duration-300 ease-in-out hover:bg-transparent hover:text-amber-600"
            >
              Save
            </button>
            <Link to="..">
              <button
                type="button"
                className="rounded-lg border-2 border-amber-600 px-8 py-2 text-amber-600 transition-colors duration-300 ease-in-out hover:bg-amber-600 hover:text-white"
              >
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditNote;
