const initialState = {
	allAnimals: [],
	animal: [],
}

function indexReducer(state = initialState, action) {
	switch (action.type) {
		case 'GET_ANIMALS':
			return {
				...state,
				allAnimals: action.payload
			}
		case 'ADD_ANIMAL':
			return {
				...state,
				allAnimals: action.payload
			}
		case 'DELETE_ANIMAL':
			return {
				allAnimals: state.allAnimals.filter(a => a._id !== action.payload)
			}
		case 'EDIT_ANIMAL':
			return {
				...state,
				animal: action.payload
			}
		case 'SAVE_ANIMAL':
			return {
				...state,
				allAnimals: action.payload
			}
		default:
			return state;
	}

}

export default indexReducer;

