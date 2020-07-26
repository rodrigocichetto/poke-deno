import Pokemon from "../models/Pokemon.ts";

class FirstGenerationController {
  async index({ response }: { response: any }) {
    try {
      const result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
      const data = await result.json();

      const body: Array<Pokemon> = data.results.map(
        (pokemon: Pokemon, index: number) => ({
          ...pokemon,
          pokedex: index + 1,
          image: `https://pokeres.bastionbot.org/images/pokemon/${
            index + 1
          }.png`,
        })
      );

      response.status = 200;
      response.body = body;
    } catch (err) {
      console.error(err);
      response.status = 500;
    }
  }
}

export default new FirstGenerationController();
