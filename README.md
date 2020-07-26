# poke-deno 🦕

This is a simple example a Deno API for my Medium post

## Run 🏃‍♂️

```bash
$ deno run --allow-read --allow-net app.ts
```

## Requests

**GET /api/poke-deno** : Returns all the best Pokémon

```json
[
  {
    "name": "bulbasaur",
    "url": "https://pokeapi.co/api/v2/pokemon/1/",
    "pokedex": 1,
    "image": "https://pokeres.bastionbot.org/images/pokemon/1.png"
  },
  ...
]
```
