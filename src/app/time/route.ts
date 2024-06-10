export const dynamic = "force-dynamic";

export async function GET (){
  return Response.json({
    time: new Date().toLocaleTimeString()
  })
}

// to inform Next.js that we don't want a response to be cashed,
// we can use segment config option with a dynamic mode