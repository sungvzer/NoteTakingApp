import { noteDto } from "../dto/note.dto";
import { notes } from "../notes";

export async function GET(req: Request) {
  return Response.json(notes);
}

export async function POST(req: Request) {
  try {
    let json = await req.json();
    let data = await noteDto.parseAsync(json);
    const note = { ...data, id: notes.length };
    notes.push(note);
    return Response.json(note);
  } catch (e) {
    return Response.json({ error: e }, { status: 400 });
  }
}
