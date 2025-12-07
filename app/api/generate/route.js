import OpenAI from "openai";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return new Response(
        JSON.stringify({ error: "Prompt is required." }),
        { status: 400 }
      );
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const result = await client.images.generate({
      model: "gpt-image-1",   // DALL·E 3 (OpenAI unified image model)
      prompt: prompt,
      size: "1024x1024"
    });

    const url = result.data[0].url;

    return new Response(
      JSON.stringify({ url }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Image generation failed." }),
      { status: 500 }
    );
  }
}
