import React from "react";
import Search from "../components/search/Search";
import List from "../components/list/List";
import { useState } from "react";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
    };
   
   
  const comments = [
    {
      id: 1,
      name: "Dev Uzair",
      comment: "Best Application",
    },
    {
      id: 2,
      name: "Naveed Sarwar",
      comment: "Easy To Use",
    },
    {
      id: 3,
      name: "Techloset",
      comment: "Great Application",
    },
    {
      id: 4,
      name: "Step Up IT Solutions",
      comment: "Keep It Up",
    },
    {
      id: 5,
      name: "GCUF SE Head",
      comment: "Happy to See Umair Keep Shining",
    },
    {
      id: 6,
      name: "Saylani IT Solutions",
      comment: "Our Proud and Pride",
    },
    {
        id: 7,
        name: "Nestol",
        comment: "Good Initiative",
      },
      {
        id: 8,
        name: "Microsoft",
        comment: "Best Company",
      },
  ];
 
  const filterComments = comments.filter((item) => {
    return  item.name.toLowerCase().includes(searchTerm);
    });

  return (
    <>
      <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      <List list={filterComments} />
    </>
  );
}

export default SearchBar;
