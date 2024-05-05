// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
/// <reference types="https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts" />

console.log("Hello from Functions!")

Deno.serve(async (req) => {
  const { username } = await req.json()

  const res = await fetch(`https://instagram.com/_u/${username}`);

  const text = await res.text();

  const data = await isValidUsername(text)


  console.log("date", data, username)

  console.log("debug", text.substring(0, 20000))

  return new Response(
    null,
    { status: data ? 200 : 400, headers: { "Content-Type": "application/json" } },
  )
})


async function isValidUsername(res: string): Promise<boolean> {


  return res.includes('<link rel="alternate')

}
/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/is-a-valid-profile' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

     curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/is-a-valid-profile' \
     --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
     --header 'Content-Type: application/json' \
     --data '{"username":"alice.vcnt_"}'

*/
