import React, { useState } from "react";
import style from "./search.module.css";
import { useSelector, useDispatch } from "react-redux";
import { filters, getByName, order, type } from "../../actions";


export const Search = ({currentPage}) => {

  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState("");

  const options = useSelector((store) => store.types);
  const button = style.button;

  const handleInputChange = (e) => {
    setPokemons(e.target.value);
  };

  const byTipo = (e) => {
    dispatch(type(e.target.value));
    setTimeout(() => {
      currentPage(1);
    }, 1);
  }
  
  const submit = (e) => {
    e.preventDefault();
    dispatch(getByName(pokemons));
    setPokemons("");
    setTimeout(() => {
      currentPage(1);
    }, 1);
  };

  const reset = () => {window.location.reload();}
  

  const creadoBy = (e) => {
    dispatch(filters(e.target.value));
    setTimeout(() => {
      currentPage(1);
    }, 1);
  }

  const orderBy = (e) => {
    dispatch(order(e.target.value));
    setTimeout(() => {
      currentPage(1);
    }, 1);
  }

  return (
    <div className={style.container}>
      <form onSubmit={submit}>
        <div className={style.field}>
          <input
            type="text"
            id="searchterm"
            value={pokemons}
            onChange={handleInputChange}
            placeholder="Find your pokemon..."
          />
          <input className={button} type="submit" value="Find!" />
        </div>
      </form>
      <div className={style.field2}>
      <button onClick={reset} className={button}>Reset filters</button>
        <select className={button} name="Type" onChange={byTipo}>
          <option value="">Type: All</option>
          {options?.map((p) => (
            <option value={p.name} key={p.slot}>
              Type: {p.name}
            </option>
          ))}
        </select>
        <select name="creado" className={button} onChange={creadoBy}>
          <option value="0">Created By: default</option>
          <option value="1">Created By: API</option>
          <option value="2">Created By: Fandom</option>
        </select>
        <select name="Ordenar" className={button} onChange={orderBy}>
          <option value="">Order By: default</option>
          <option value="a-z">Order By: A-Z</option>
          <option value="z-a">Order By: Z-A</option>
          <option value="fuerza+">Order By: strength increase</option>
          <option value="fuerza-">Order By: strength decrease</option>
        </select>
      </div>
    </div>
  );
};
