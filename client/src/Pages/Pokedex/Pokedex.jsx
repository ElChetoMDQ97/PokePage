import React, { useState } from "react";
import style from "./pokedex.module.css";
import { Card } from "../../components/Cards/Card";
import { Search } from "../../components/Search/Search";
import { useSelector } from "react-redux";
import { ordered, tipos } from "../../helpers/filtros";

export const Pokedex = () => {
  let pokemons = useSelector((store) => store.pokemons);
  const type = useSelector((store) => store.type);
  const order = useSelector((store) => store.order);

  if (type) pokemons = tipos(type, pokemons);
  if (order) pokemons = ordered(order, pokemons);

  const [page, setPage] = useState(0);

  const pagination = () => {
    if (pokemons.length) return pokemons.slice(page, page + 12);
    if (pokemons.info) return pokemons;
    return [];
  };

  const array = pagination();

  const nextPage = () => {
    if (pokemons.length > page + 12) {
      setPage(page + 12);
    }
  };

  const previousPage = () => {
    if (page > 0) {
      setPage(page - 12);
    }
  };

  return (
    <div className={style.container}>
      <Search />
      <div className="botones">
        <button onClick={previousPage} className="pages">
          &laquo; Previous
        </button>
        <button onClick={nextPage} className="pages">
          Next &raquo;
        </button>
      </div>
      <Card
        array={array}
        img={"https://media.baamboozle.com/uploads/images/125978/1629738053_29014_gif-url.gif"}
      />
    </div>
  );
};