import { type NextRequest } from "next/server";
import { headers } from "next/headers";

//----------- Read headers from incoming request ----------
export const GET = async (request: NextRequest) => {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();

  console.log(requestHeaders.get("Authorization"));
  console.log(headerList.get("Authorization"));
  // return new Response("Profile API data!");

  return new Response("<h1>Profile API data!</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
};
