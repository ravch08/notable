import { Dispatch, SetStateAction } from "react";
import { NotesProps } from "../../App";

export async function getNotes(
  setNotes: Dispatch<SetStateAction<NotesProps[]>>,
) {
  try {
    const response = await fetch(`http://localhost:3000/notes`);
    const data = await response.json();
    setNotes(data);
  } catch (error) {
    console.log(error);
    throw new Error(`Could not fetch the notes! ${error}`);
  }
}

export async function postNote(data: NotesProps) {
  try {
    const response = await fetch(`http://localhost:3000/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    console.log(error);
    throw new Error(`Could not post the note! ${error}`);
  }
}

export async function editNote(data: NotesProps, id: string) {
  try {
    const response = await fetch(`http://localhost:3000/notes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data?.title,
        imgSrc: data?.imgSrc,
        body: data?.body,
      }),
    });
    return response.json();
  } catch (error) {
    console.log(error);
    throw new Error(`Could not edit the note! ${error}`);
  }
}

export async function deleteNote(id: string) {
  try {
    const response = await fetch(`http://localhost:3000/notes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (error) {
    console.log(error);
    throw new Error(`Could not edit the note! ${error}`);
  }
}
