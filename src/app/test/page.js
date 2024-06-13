"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Page() {
  async function getData() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      return response.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  const { data, isLoading, isError } = useQuery({
    queryFn: getData,
    queryKey: ["tripplan"],
  });

  if (isLoading) return "loading";
  if (isError) return <div>Sorry, there was an error</div>;

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
