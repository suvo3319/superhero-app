import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import axios from "axios";
import { Card } from "./Card";
import { useGetHeroesQuery } from "../redux/Api";

export const SuperheroPage = () => {
  //   const [loading, setLoading] = useState(true);
  //   const [data, setData] = useState(null);
  //   useEffect(() => {
  //     axios.get("http://localhost:3001/superheroes").then((response) => {
  //       setData(response.data);
  //       setLoading(false);
  //     });
  //   }, []);

  const { isLoading, isError, data, error } = useGetHeroesQuery("");
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Something went wrong... {error.message}</div>;
  }
  return (
    <>
      <Navbar />
      <h1 className="page-header">Superhero page</h1>
      <h2 className="main-title">This are the fellow superheroes</h2>
      <ul className="card-container">
        {data.map((hero) => (
          <li key={hero.id}>
            <Card hero={hero} />
          </li>
        ))}
      </ul>
    </>
  );
};
