const coucouApi = async () => {
  fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/100')
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));
};

const pokemon = await coucouApi();

console.log(pokemon);
