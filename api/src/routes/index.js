const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemons = require('./pokemons.js');
const types = require('./types.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokemons);
router.use('/types', types)

module.exports = router;



// router.get('/pokemons', async (req, res) => {
//     const info = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
//  res.json(info.data);
// })

// router.get('/pokemons/:id', async (req, res) => {
//     const { id } = req.params;
//     const pokemonInfo = await forId(id);
//     if (!pokemonInfo.id) return res.json({ info: "No se encontro el pokemon" });
//     res.json(pokemonInfo);
// })

// router.get(`/pokemons/`, async (req, res) => {
//     let { name, by } = req.query;
//     let pokemonInfo = [];
//     if (name) {
//       name = name.toLowerCase();
//       pokemonInfo = await forName(name);
//       if (!pokemonInfo.length)
//         return res.json({ info: "No se encontro el pokemon" });
//       return res.json(pokemonInfo);
//     }
//     pokemonInfo = await info(by);
//     if (!pokemonInfo.length) return res.json({ info: "No hay mas registros" });
//     res.json(pokemonInfo);
// })

// router.post("/", async (req, res) => {
//     let { name, vida, fuerza, defensa, velocidad, altura, peso, tipos } =
//       req.body;
//     if (
//       isNaN(vida) ||
//       isNaN(fuerza) ||
//       isNaN(defensa) ||
//       isNaN(velocidad) ||
//       isNaN(altura) ||
//       isNaN(peso)
//     )
//       return res.json({ info: "Los argumentos deben ser numeros" });
  
//     if (!name) return res.json({ info: "Se requiere un nombre" });
  
//     const existe = await Pokemon.findOne({ where: { name: name } });
//     if (existe) return res.json({ info: "El pokemon ya existe" });
  
//     const pokemon = await Pokemon.create({
//       name: name.toLowerCase(),
//       vida: Number(vida),
//       fuerza: Number(fuerza),
//       defensa: Number(defensa),
//       velocidad: Number(velocidad),
//       altura: Number(altura),
//       peso: Number(peso),
//     });
  
//     if (!tipos.length) tipos = [1];
  
//     await pokemon.setTipos(tipos);
//     res.json({ info: "Pokemon creado" });
//   });

// router.get('/types', async (req, res) => {
//     const api = await fetch('https://pokeapi.co/api/v2/type');
//     const types = await api.json();
//     for( t of types.results ) {
//         const existe = await Tipo.findOne({where: { name: t.name }})
//         if(existe) return res.json(await Tipo.findAll())
//         await Tipo.create({ name: t.name})
//     }
//     res.json(await Tipo.findAll());
// })