"use client";
import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { useWindowSize } from "@uidotdev/usehooks";
import MarkdownButton from "./MarkdownButton";

export default function AddNotes() {
  const size = useWindowSize();
  const isMobile = (size.width ?? 0) < 768;
  const defaultMarkdown = `
# Hello note 📓!

Welcome to Noted, an innovative note-taking app. 🚀

You can write notes in **Markdown**. 🎉

If you need help, check out the [Markdown guide](https://www.markdownguide.org/cheat-sheet). 📚
`;

  const [markdown, setMarkdown] = useState<string | undefined>(defaultMarkdown);
  return (
    <div>
      <MDEditor
        className="w-full"
        value={markdown}
        onChange={setMarkdown}
        height={isMobile ? 400 : 600}
        preview={isMobile ? "edit" : "live"}
        toolbarBottom={isMobile}
      />

      <div className="flex flex-row justify-end gap-2 mt-8">
        <MarkdownButton
          role="secondary"
          onClick={() => {
            setMarkdown(defaultMarkdown);
          }}
        >
          Reset
        </MarkdownButton>
        <MarkdownButton
          role="primary"
          onClick={() => {
            // TODO: Save the note
          }}
        >
          Save
        </MarkdownButton>
      </div>
    </div>
  );
}
