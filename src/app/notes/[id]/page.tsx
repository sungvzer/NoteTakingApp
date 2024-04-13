"use client";
import useSWR from "swr";
import NoteEditor from "./NoteEditor";
import Link from "next/link";

export default function NotePage({ params }: { params: { id: string } }) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, isLoading } = useSWR(`/api/notes/${params.id}`, fetcher);
  console.dir(data);

  if (params.id === "add") {
    return (
      <main className="flex flex-col p-10 text-center flex-grow">
        <header className="mb-6">
          <h1 className="text-3xl font-bold md:text-4xl dark:text-white">
            Add a note to the diary
          </h1>
          <p className="text-lg mt-4 md:text-xl dark:text-white">
            Write down your thoughts and feelings. When you&apos;re done, click
            the save button at the bottom of the page.
          </p>
        </header>
        <NoteEditor />
      </main>
    );
  }

  if (data?.error) {
    return (
      <main className="flex flex-col p-10 text-center flex-grow">
        <header className="mb-6">
          <h1 className="text-3xl font-bold md:text-4xl dark:text-white">
            Error loading note
          </h1>
          <p className="text-lg mt-4 mb-4 md:text-xl dark:text-white">
            An error occurred while loading the note. Please try again later.
          </p>
          <Link href="/notes/add">
            <button
              type="button"
              className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
            >
              + Add note
            </button>
          </Link>
        </header>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="flex flex-col p-10 text-center flex-grow">
        <header className="mb-6">
          <h1 className="text-3xl font-bold md:text-4xl dark:text-white">
            Loading note
          </h1>
          <p className="text-lg mt-4 md:text-xl dark:text-white">
            Please wait while we load the note for you.
          </p>
        </header>
      </main>
    );
  }

  return (
    <main className="flex flex-col p-10 text-center flex-grow">
      <header className="mb-6">
        <h1 className="text-3xl font-bold md:text-4xl dark:text-white">
          Edit a note
        </h1>
        <p className="text-lg mt-4 md:text-xl dark:text-white">
          Write down your thoughts and feelings. When you&apos;re done, click
          the save button at the bottom of the page.
        </p>
      </header>
      <NoteEditor
        id={Number(params.id)}
        title={data.title}
        content={data.content}
      />
    </main>
  );
}
