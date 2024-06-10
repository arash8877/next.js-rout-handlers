import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

//----------- Read headers from incoming request ----------
export const GET = async (request: NextRequest) => {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();
  console.log(requestHeaders.get("Authorization"));
  console.log(headerList.get("Authorization"));

  //to read cookie
  const theme = request.cookies.get("theme");
  console.log(theme);

  cookies().set("resultsPerPage", "20"); //second option option to set cookie
  const resultsPerPage = cookies().get("resultsPerPage")
  console.log(resultsPerPage)

  // return new Response("Profile API data!");
  return new Response("<h1>Profile API data!</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark", //the first option to set cookie
    },
  });
};
