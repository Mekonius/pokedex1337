export function getPokemon({ url }) {
  return new promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
}

export function getAllPokemon(url) {
  return new promise((resolve, reject) => {
    fetch(url).then((data) => {
      resolve(data);
    });
  });
}
