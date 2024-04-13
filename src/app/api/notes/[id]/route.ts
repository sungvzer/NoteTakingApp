import { NextApiRequest } from "next";
import { notes } from "../../notes";
import { noteDto } from "../../dto/note.dto";

export function DELETE(
  _: NextApiRequest,
  { params }: { params: { id: string } },
) {
  const note = notes.find((note) => note.id === Number(params.id));
  if (!note) {
    return Response.json({ error: "Note not found" }, { status: 404 });
  }
  notes.splice(notes.indexOf(note), 1);
  return new Response(null, { status: 204 });
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } },
) {
  const note = notes.find((note) => note.id === Number(params.id));
  if (!note) {
    return Response.json({ error: "Note not found" }, { status: 404 });
  }
  try {
    let json = await req.json();
    let data = await noteDto.parseAsync(json);
    Object.assign(note, data);
    return Response.json(note);
  } catch (e) {
    return Response.json({ error: e }, { status: 400 });
  }
}

export function GET(_: NextApiRequest, { params }: { params: { id: string } }) {
  const note = notes.find((note) => note.id === Number(params.id));
  if (!note) {
    return Response.json({ error: "Note not found" }, { status: 404 });
  }
  return Response.json(note);
}
