import { useEffect } from "react";

// This is a simple example of a component that fetches data from an API.
const API = "https://pokeapi.co/api/v2/ability/?limit=20&offset=20";

export default function About() {
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch(API, {
      signal,
    })
      .then((response): Promise<any> => response.json())
      .then((response) => {
        console.log(response);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return <h2>About</h2>;
}
