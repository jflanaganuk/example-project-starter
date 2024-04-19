import { useEffect, useState } from "react";

// This is a simple example of a component that fetches data from an API.
const API = "https://pokeapi.co/api/v2/ability/?limit=20&offset=20";

export default function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch(API, {
      signal,
    })
      .then((response): Promise<any> => response.json())
      .then((response) => {
        console.log(response);
        setData(response.results);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h2>About</h2>
      {data === null && <p>Loading...</p>}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
