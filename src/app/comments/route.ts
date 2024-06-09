import { comments } from "./data";

export const GET = async () => {
  return Response.json(comments);
};
