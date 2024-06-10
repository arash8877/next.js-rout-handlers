import { comments } from "../data";
import { type NextRequest } from 'next/server'

interface iContext {
  params: { id: string };
}

//----------------------- GET method ----------------------
// export const GET = async (_request: Request, { params }: iContext) => {
//   // there are two parameters (request, context); the only value of context is params which I destructure it.
//   // params: {id: string}; id correspond to [id] name of the folder [id]
//   // since we are not using request, we prefix it with underscore '_request'.
//   const comment = comments.find((item) => item.id === parseInt(params.id));
//   return Response.json(comment);
// };

//----------------------- PATCH method ----------------------
export const PATCH = async (request: Request, { params }: iContext) => {
  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex((item) => item.id === parseInt(params.id));
  comments[index].text = text;

  return Response.json(comments[index]);
};

//----------------------- DELETE method ----------------------
export const DELETE = async (request: Request, { params }: iContext) => {
  const index = comments.findIndex((item) => item.id === parseInt(params.id));
  const deletedComment = comments[index];
  comments.splice(index, 1);
  return Response.json(deletedComment);
};

//--------------------- URL query parameter ------------------
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredComments = query
      ? comments.filter((comment) => comment.text.includes(query))
      : comments;
    return Response.json(filteredComments);
  }

  // if we navigate to http://localhost:3000/comments?guery=first we expect to see 
  // only those comments containing the word 'first' (my code does not work!)
  // we can achieve this with route handlers.
  // NextRequest object provides methods for managing query parameters

