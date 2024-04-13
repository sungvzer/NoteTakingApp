"use client";
import MarkdownButton from "./MarkdownButton";
import MarkdownEditor from "./MarkdownEditor";

export default function AddNotes() {
  return (
    <main className="flex flex-col  p-10 text-center flex-grow dark:bg-gray-700">
      <header className="mb-6">
        <h1 className="text-3xl font-bold md:text-4xl dark:text-white">
          Add a note to the diary
        </h1>
        <p className="text-lg mt-4 md:text-xl dark:text-white">
          Write down your thoughts and feelings. When you&apos;re done, click
          the save button at the bottom of the page.
        </p>
      </header>
      <MarkdownEditor />
    </main>
  );
}
