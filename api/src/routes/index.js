const { Router } = require('express');
const axios = require('axios');
const express = require('express');
const {conn} = require('../db.js');
const e = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// https://pokeapi.co/api/v2/pokemon/bulbasaur === https://pokeapi.co/api/v2/pokemon/1
// https://pokeapi.co/api/v2/pokemon/id

const router = Router();
const api = axios.get(`https://pokeapi.co/api/v2/pokemon?limit=40`);






//         hp: https://pokeapi.co/api/v2/pokemon/id/stats/stat/name=hp,
//         atk: https://pokeapi.co/api/v2/pokemon/id/stats/stat/name=atk,
//         def: https://pokeapi.co/api/v2/pokemon/id/stats/stat/name=def,
//         spd: https://pokeapi.co/api/v2/pokemon/id/stats/stat/name=spd,
//         height: https://pokeapi.co/api/v2/pokemon/id/height,
//         weight:https://pokeapi.co/api/v2/pokemon/id/weight,
//         image: https://pokeapi.co/api/v2/pokemon/id/sprite/other/official-artwork/front_default,

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', async (req, res) => {
    info = await api;
 res.json(info.data);
})

router.get('/pokemons/id', async (req, res) => {
    info = await api;
    const val = info.data.results;
 res.json(val);
})

router.get(`/pokemons/name`, async (req, res) => {
    info = await api;
    const val = info.data.results;
    const name = val.forEach(element => {
        for(var i = 0; i < val.length; i++){
            element = val[i].name
        }
    });
 res.json(val);
})

router.get('/types', async (req, res) => {
    info = await api;
 res.json(info.data);
})

module.exports = router;

/*
GET https://pokeapi.co/api/v2/pokemon
GET https://pokeapi.co/api/v2/pokemon/{id}
GET https://pokeapi.co/api/v2/pokemon/{name}
GET https://pokeapi.co/api/v2/type
*/