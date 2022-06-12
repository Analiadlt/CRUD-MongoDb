import axios from 'axios';

export function getAnimals() {
	return async function (dispatch) {
		var json = await axios.get("http://localhost:3001/");
		return dispatch({
			type: 'GET_ANIMALS',
			payload: json.data
		})
	}
}


export function addAnimal(payload) {
	return async function (dispatch) {
		var json = await axios.post("http://localhost:3001/add", payload);
		return dispatch({
			type: 'ADD_ANIMAL',
			payload: json.data
		})
	}
}

export function editAnimal(payload) {
	return async function (dispatch) {
		var json = await axios.get(`http://localhost:3001/edit/${payload.id}`, payload);
		console.log(' editAnimal ', json.data)
		return dispatch({
			type: 'EDIT_ANIMAL',
			payload: json.data
		})
	}
}

export function saveAnimal(payload) {
	return async function (dispatch) {
		var json = await axios.put(`http://localhost:3001/edit/${payload.id}`, payload);
		return dispatch({
			type: 'SAVE_ANIMAL',
			payload: json.data
		})
	}
}

export function deleteAnimal(id) {
	return async function (dispatch) {
		var json = await axios.delete(`http://localhost:3001/delete/${id}`);
		return dispatch({
			type: 'DELETE_ANIMAL',
			payload: id
		})
	}
}

