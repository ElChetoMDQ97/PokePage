import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import style from "./pokemon.module.css";
import Stats from "../Stats";

export const Pokemon = () => {
  const { id } = useParams();
  const history = useHistory();

  const [pokemon, setPokemon] = useState({});

  const addTeam = (obj) => {
    let array = [];
    if (localStorage.getItem("team")) {
      array = localStorage.getItem("team");
      array = JSON.parse(array);
      if (array.length >= 8) array.shift();
      array.push(obj);
      localStorage.setItem("team", JSON.stringify(array));
    } else {
      array.push(obj);
      localStorage.setItem("team", JSON.stringify(array));
    }
    history.push("/team");
  };

  useEffect(() => {
    detalles();
  }, []);

  const detalles = async () => {
    const data = await fetch(`http://192.168.100.6:3001/pokemons/${id}`);

    const pokemon = await data.json();
    setPokemon(pokemon);
  };

  return (
    <>
      <div className={style.container}>
        <h1>{pokemon.name}</h1>
        <h2>#{pokemon.id}</h2>

        <div class={style.pokebola}>
          <p>Catch</p>
          <button
            onClick={() => {
              addTeam({
                id: pokemon.id,
                name: pokemon.name,
                type: pokemon.type,
                img: pokemon.img,
              });
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
              alt=""
            />
          </button>
        </div>

        <div className={style.ima}>
          <img src={pokemon.img} alt="" />
          <div className={style.parrafo}>
            <p>Weigth:<br/>{pokemon.weight}kgs</p>
            <br/>
            <p>Heigth:<br/>{pokemon.height}fts</p>
          </div>
        </div>

        <div className={style.type}>
          {pokemon.type
            ? pokemon?.type.map((t) => <h3 className={style[`${t}`]}>{t}</h3>)
            : null}
        </div>
        <div className={style.meter}>
          <div className={style.type}>
            <Stats valor={pokemon.vida} nombre={"Life"} />
            <Stats valor={pokemon.fuerza} nombre={"Attack"} />
          </div>
          <div className={style.type}>
            <Stats valor={pokemon.defensa} nombre={"Defence"} />
            <Stats valor={pokemon.velocidad} nombre={"Speed"} />
          </div>
        </div>
      </div>
    </>
  );
};