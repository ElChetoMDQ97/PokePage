import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getPokemons } from "../../actions";
import style from "./form.module.css";

export const Form = () => {
  const history = useHistory ();
  const dispatch = useDispatch();
  const options = useSelector((store) => store.types);

  const validate = (input) => {
    let errors = {};
    if (!input.name) {
      errors.name = "Name is required";
    }
    return errors;
  };

  const [data, setData] = useState({
    name: "",
    vida: 0,
    fuerza: 0,
    defensa: 0,
    velocidad: 0,
    altura: 0,
    peso: 0,
    tipos: [],
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    if (e.target.name !== "name") {
      setData({
        ...data,
        [e.target.name]: Number(e.target.value) <= 1 ? 1 : Number(e.target.value),
      });
    } else {
      setErrors(
        validate({
          ...data,
          [e.target.name]: e.target.value,
        })
      );
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  const checkbox = (e) => {
    if (data.tipos.includes(e.target.value)) {
      data.tipos = data.tipos.filter((id) => id !== e.target.value);
      setData({
        ...data,
        tipos: data.tipos,
      });
    } else {
      setData({
        ...data,
        tipos: [...data.tipos, e.target.value],
      });
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    const crear = await fetch("http://192.168.100.6:3001/pokemons", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    dispatch(getPokemons());
    const respuesta = await crear.json();
    console.log(respuesta);
    setData({
      name: "",
      vida: 0,
      fuerza: 0,
      defensa: 0,
      velocidad: 0,
      altura: 0,
      peso: 0,
      tipos: [],
    });
    alert('Pokemon created successfully')
    history.push('/home');
  };

  return (
    <div className={style.containerCreate}>
      <form action="POST" className={style.form} onSubmit={submit}>
        <div className={style.separado}>
          <h1>Create your Pokemon</h1>
          <p className={errors.name ? style.danger : style.question}>
            <label>Pokemon name</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={data.name}
              onChange={handleInputChange}
              maxlength="25"
              required
            />
          </p>
          {errors.name ? <p className="danger">{errors.username}</p> : null}
          <p className={style.question}>
            <label>Life</label>
            <input
              type="number"
              name="vida"
              value={data.vida}
              min="1"
              max="200"
              onChange={handleInputChange}
            />
          </p>
          <p className={style.question}>
            <label>Strength</label>
            <input
              type="number"
              name="fuerza"
              value={data.fuerza}
              min="1"
              max="200"
              onChange={handleInputChange}
            />
          </p>
          <p className={style.question}>
            <label>Defense</label>
            <input
              type="number"
              name="defensa"
              value={data.defensa}
              min="1"
              max="200"
              onChange={handleInputChange}
            />
          </p>
          <p className={style.question}>
            <label>Speed</label>
            <input
              type="number"
              name="velocidad"
              value={data.velocidad}
              min="1"
              max="200"
              onChange={handleInputChange}
            />
          </p>
          <p className={style.question}>
            <label>Height</label>
            <input
              type="number"
              name="altura"
              value={data.altura}
              min="1"
              max="80"
              onChange={handleInputChange}
            />
          </p>
          <p className={style.question}>
            <label>Weight</label>
            <input
              type="number"
              name="peso"
              min="1"
              max="10000"
              value={data.peso}
              onChange={handleInputChange}
            />
          </p>
        </div>

        <div className={style.hiddenCB}>
          <h1>Types <h6>(default type: normal)</h6></h1>
          <div className={style.tipos} >
            {options?.map((t) => (
              <div key={t.slot}>
                <input
                  type="checkbox"
                  name={t.name}
                  value={t.slot}
                  id={t.slot}
                  maxLength='3'
                  onChange={checkbox}
                />
                <label htmlFor={t.slot}>{t.name}</label>
                {t.slot % 4 === 0 ? <br /> : null}
              </div>
            ))}
            <input type="submit" value="Create" className={style.submit}/>
          </div>
        </div>
      </form>
    </div>
  );
};