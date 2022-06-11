const initialState = {
	allAnimals: [],
	// pokemons: [],
	// detail: [],
	// types: []
}

function rootReducer (state=initialState, action) {
	switch(action.type) {
		case 'GET_ANIMALS':
			return {
				...state,
				allAnimals: action.payload
			}
		case 'ADD_ANIMALS':
				return {
					...state,
					allAnimals: action.payload
				}
		// case 'GET_POKEMON_BY_NAME':
		// 	return {
		// 		...state,
		// 		pokemons: action.payload
		// 	}
		// case 'FILTER_BY_TYPES':
		// 	const allPokemons = state.allPokemons;
		// 	const typesFilter = action.payload ==='All'? allPokemons 
		// 	: allPokemons?.filter(pok => pok.types.includes(action.payload)			
		// 	);
		// 	return {
		// 		...state,
		// 		pokemons: typesFilter
		// 	}
		// case 'FILTER_ORIG_CREA':
		// 	let pokemonsFilter='';
		// 	if (action.payload === 'All') pokemonsFilter = state.allPokemons;
		// 	if (action.payload === 'crea') {
		// 		pokemonsFilter = state.allPokemons?.filter(pok => pok.createdAt)	
		// 	} else {
		// 	   	pokemonsFilter = state.allPokemons?.filter(pok => !pok.createdAt)		
		// 	};
		// 	return {
		// 		...state,
		// 		pokemons: pokemonsFilter 
		// 	}
		// case 'ORDER_BY_NAME':
		// 	let sortedArr = action.payload === 'ascName'?
		// 		state.allPokemons.sort(function(a,b){
		// 			if (a.name > b.name) return 1;
		// 			if (b.name > a.name) return -1;
		// 			return 0;
		// 		}) :
		// 		state.allPokemons.sort(function(a,b) {
		// 			if (a.name > b.name) return -1;
		// 			if (b.name > a.name) return 1;
		// 			return 0;
		// 		})

		// 		return {
		// 			...state,
		// 			pokemons: sortedArr
		// 		}	
		// case 'ORDER_BY_ATTACK':
		// 	let arrSorted = action.payload === 'ascAt'?
		// 		state.allPokemons.sort(function(a,b){
		// 			if (a.attack > b.attack) return 1;
		// 			if (b.attack > a.attack) return -1;
		// 			return 0;
		// 		}) :
		// 		state.allPokemons.sort(function(a,b) {
		// 			if (a.attack > b.attack) return -1;
		// 			if (b.attack > a.attack) return 1;
		// 			return 0;
		// 		})

		// 		return {
		// 			...state,
		// 			pokemons: arrSorted
		// 		}		
		// case 'GET_TYPES':
		// 	return {
		// 		...state,
		// 		types: action.payload,
		// 	}
		// case 'GET_POKEMON_DETAIL':
			
		// 	return {
		// 		...state,
		// 		detail: action.payload,
		// 	}
		default:
			return state;	
	}

}

export default rootReducer;

