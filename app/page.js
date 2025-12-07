"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function generateImage() {
    setLoading(true);
    setImage(null);

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    setImage(data.url);
    setLoading(false);
  }

  return (
    <div>
      <h1>DALL·E Image Generator API</h1>
      <input
        type="text"
        placeholder="Enter prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ padding: 8, width: 400 }}
      />
      <button
        onClick={generateImage}
        style={{ marginLeft: 10, padding: "8px 20px" }}
      >
        Generate
      </button>

      {loading && <p>Generating...</p>}
      {image && <img src={image} style={{ marginTop: 20, maxWidth: 500 }} />}
    </div>
  );
}
