"use client";
import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { useWindowSize } from "@uidotdev/usehooks";
import MarkdownButton from "./MarkdownButton";
import { useRouter } from "next/navigation";

export default function AddNotes() {
  const size = useWindowSize();
  const isMobile = (size.width ?? 0) < 768;
  const defaultMarkdown = `
# Hello note 📓!

Welcome to Noted, an innovative note-taking app. 🚀

You can write notes in **Markdown**. 🎉

If you need help, check out the [Markdown guide](https://www.markdownguide.org/cheat-sheet). 📚
`;

  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    content: defaultMarkdown,
  });
  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 mb-4 border border-gray-200 rounded-lg dark:border-gray-700 dark:bg-gray-600 text-xl md:text-lg font-bold"
        value={form.title}
        onChange={(e) => {
          setForm({ ...form, title: e.target.value });
        }}
      />
      <MDEditor
        className="w-full"
        value={form.content}
        onChange={(value) => {
          setForm({ ...form, content: value ?? "" });
        }}
        height={isMobile ? 400 : 600}
        preview={isMobile ? "edit" : "live"}
        toolbarBottom={isMobile}
      />

      <div className="flex flex-row justify-end gap-2 mt-8">
        <MarkdownButton
          role="secondary"
          onClick={() => {
            setForm({ title: "", content: defaultMarkdown });
          }}
        >
          Reset
        </MarkdownButton>
        <MarkdownButton
          role="primary"
          onClick={async () => {
            const res = await fetch("/api/notes", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(form),
            });
            if (res.ok) {
              router.push(`/notes/${(await res.json()).id}`);
            } else {
              alert("Failed to save note");
            }
          }}
        >
          Save
        </MarkdownButton>
      </div>
    </div>
  );
}
