import { z } from "zod";

export const noteDto = z.object({ title: z.string(), content: z.string() });

export type NoteDto = z.infer<typeof noteDto>;
