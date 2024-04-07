import React from "react";
import useFetch from "../../hooks/useFetch";

export default function Home() {
  const { data } = useFetch("/products?populate=*");
  console.log(data);
  return <div>Home</div>;
}
