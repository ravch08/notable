import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import {
  EditNote,
  Home,
  Layout,
  NewNote,
  Note,
  Page404,
} from "./components/utils/helper";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { string, z } from "zod";
import { getNotes } from "./components/services/api";
import "./styles/App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="new-note" element={<NewNote />} />
      <Route path="notes/:id" element={<Note />} />
      <Route path="notes/:id/edit" element={<EditNote />} />
      <Route path="*" element={<Page404 />} />
    </Route>,
  ),
);

export const notesSchema = z.object({
  date: string(),
  id: string().optional(),
  imgSrc: string().url().optional(),
  title: string().min(5, {
    message: "Title must be atleast 5 character long!",
  }),
  body: string().min(5, {
    message: "Title must be atleast 5 character long!",
  }),
});

export type NotesProps = z.infer<typeof notesSchema>;

export type ContextProps = {
  notes: NotesProps[];
  searchTerm: string;
  setNotes: Dispatch<SetStateAction<NotesProps[]>>;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

export const NoteContext = createContext<ContextProps>({
  notes: [],
  searchTerm: "",
  setNotes: () => {},
  setSearchTerm: () => {},
});

function App() {
  const [notes, setNotes] = useState<NotesProps[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    getNotes(setNotes);
  }, []);

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, searchTerm, setSearchTerm }}
    >
      <RouterProvider router={router} />
    </NoteContext.Provider>
  );
}

export default App;
