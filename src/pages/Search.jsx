import React from "react";
import { useLocation } from "react-router-dom";

export default function Search() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("query");
  console.log(searchTerm);
  return <div>Search</div>;
}
