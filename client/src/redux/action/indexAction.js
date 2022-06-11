import axios from 'axios';

export function getAnimals() {
	return async function(dispatch){
		var json= await axios.get("http://localhost:3001/");
		return dispatch({
			type: 'GET_ANIMALS',
			payload: json.data 
		})
	}
}


export function addAnimal(payload) {
	return async function(dispatch){
		var json= await axios.post("http://localhost:3001/add", payload);
		// return json;
		return dispatch({
			type: 'ADD_ANIMAL',
			payload: json.data 
		})
	}
}

// export function filterPokemonsByTypes(payload) {
// 	return {
// 			type: 'FILTER_BY_TYPES',
// 			payload
// 	}
// }


// export function filterOrigCrea(payload) {
// 	return {
// 			type: 'FILTER_ORIG_CREA',
// 			payload
// 	}
// }


// export function orderByName(payload) {
// 	return {
// 			type: 'ORDER_BY_NAME',
// 			payload
// 	}
// }

// export function orderByAttack(payload) {
// 	return {
// 			type: 'ORDER_BY_ATTACK',
// 			payload
// 	}
// }

// export function getPokemonByName(payload) {
// 	return async function (dispatch) {
// 		try {
// 			const pokemon = await axios.get("http://localhost:3001/pokemons?name=" + payload);
// 			return dispatch({
// 				type: 'GET_POKEMON_BY_NAME',
// 				payload: pokemon.data,
// 			})
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	};
// }

// export function getPokemonDetail(id) {
// 	return async function(dispatch){
// 		try {
// 			var json= await axios.get("http://localhost:3001/pokemons/"+id);
// 				return dispatch({
// 					type: 'GET_POKEMON_DETAIL',
// 					payload: json.data
// 				})
// 		} catch (error) {
// 			console.log(error)

// 		}	
// 	}
// }

