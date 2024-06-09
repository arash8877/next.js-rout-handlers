import { comments } from "../data";

interface iContext {
  params: { id: string };
}

export const GET = async (_request: Request, { params }: iContext) => {
  // there are two parameters (request, context); the only value of context is params which I destructure it.
  // params: {id: string}; id correspond to [id] name of the folder [id]
  // since we are not using request, we prefix it with underscore '_request'.
  const comment = comments.find((item) => item.id === parseInt(params.id));
  return Response.json(comment);
};

export const PATCH = async (request: Request, { params }: iContext) => {
  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex((item) => item.id === parseInt(params.id));
  comments[index].text = text;

  return Response.json(comments[index]);
};
