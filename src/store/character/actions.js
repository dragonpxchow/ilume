//  load first 20 characters
export async function getCharacters({commit}, nextPage) {
    // need Promise  !!!!!!!!!!!!!
    console.log ('next page >>>>>>>', nextPage)
    // fetch return promise
    return fetch("https://rickandmortyapi.com/api/character/")
    .then(response => {
      return response.json();
    })
    .then(jsonObj => {
      commit("setCharacters", jsonObj);
    })
    .catch(error => {
      console.log(error);
    });
}

  