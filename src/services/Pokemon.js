
import axios from 'axios';

async function getPokemonList() {
	try {
    const response = await axios({
			url: 'https://graphql-pokemon.now.sh',
			method: 'post',
			data: {
				query: `{ 
					pokemons(first:12) { 
						id 
						number 
						name 
						image 
						types 
					} 
				}`
			}
		});

    return response.data;

  } catch (error) {
  	return null;  
  }
}

async function getPokemonById(id) {
	try {
    const response = await axios({
			url: 'https://graphql-pokemon.now.sh',
			method: 'post',
			data: {
				query: `{
				  pokemon(id:"`+id+`") {
				    id
				    number
				    name
				    image
				    types
				    classification
				    resistant
				    evolutions {
				      id
				      number
				      name
				      image
				      types
				    }
				  }
				}`
			}
		});

    return response.data;

  } catch (error) {
  	return null;  
  }
}

module.exports = {
	getPokemonList,
	getPokemonById
}