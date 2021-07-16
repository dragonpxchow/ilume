export const setCharacters = (state, payload) => {
    const {info, results } = payload
    console.log ('payload info >>>>>>>>', info)
    console.log ('payload result >>>>>>>>', results)
  
    state.results = results
    state.info = info
   
}