"use client";

import Link from "next/link";
import { Note } from "../api/models/note.model";
import { NoteCard } from "./NoteCard";
import useSWR from "swr";

export function NoteGrid() {
  const defaultNote = {
    id: 1,
    title: "Note 1",
    content: `This is the content of note 1.

        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quam
        libero quibusdam est voluptatem saepe praesentium rem tempore? Quia
        harum sequi incidunt odio ex, cum soluta aut ad nesciunt veniam.
    `,
  };
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, isLoading } = useSWR("/api/notes", fetcher);

  const parsedData = data as Note[];

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <NoteCard key={i} note={defaultNote} isLoading={true} />
        ))}
      </div>
    );
  }

  if (parsedData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold">No notes found</h1>
        <p className="text-lg mt-4 mb-4">Create a new note to get started.</p>
        <Link href="/notes/add">
          <button
            type="button"
            className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
          >
            + Add note
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {parsedData?.map((note) => (
        <NoteCard key={note.id} note={note} isLoading={false} />
      ))}
    </div>
  );
}
