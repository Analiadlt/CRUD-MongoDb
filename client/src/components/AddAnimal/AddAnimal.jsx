import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { addAnimal } from '../../redux/action/indexAction';
import { useDispatch } from 'react-redux';
import { validate } from '../Utils/utils';

export default function AddAnimal() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [errors, setErrors] = useState({});

	const newInput = {
		senasa_id: '',
		animal_tipo: 'Novillo',
		peso_kg: 0,
		potrero_nombre: '',
		dispositivo_tipo: 'COLLAR',
		dispositivo_nro: ''
	}

	const [input, setInput] = useState(newInput);

	function handleChange(e) {
		setInput((input) => {
			const newValues = {
				...input,
				[e.target.name]: e.target.value
			}
	
			setErrors(validate(newValues));

			return newValues;
		});
	};


	function handleSubmit(e) {
		e.preventDefault();
		dispatch(addAnimal(input));
		alert('Los datos fueron almacenados.');
		setInput(newInput)
		navigate('/');
	}

	return (
		<div >
			<Link to='/'><button>Volver</button></Link>
			<h1>Carga de un nuevo animal</h1>
			<form onSubmit={(e) => handleSubmit(e)}>
				<div>
					<label>ID SENASA:</label>
					<input type='text' value={input.senasa_id} name='senasa_id' onChange={(e) => handleChange(e)} />
				</div>
				<label>
					Tipo de Animal:
					<select>
						<option value="Novillo">Novillo</option>
						<option value="Toro">Toro</option>
						<option value="Vaquillona">Vaquillona</option>
					</select>
				</label>
				<div>
					<label>Peso animal (kg):</label>
					<input type='number' value={input.peso_kg} name='peso_kg' onChange={(e) => handleChange(e)} />
				</div>
				<div>
					<label>Nombre de potrero:</label>
					<input type='text' value={input.potrero_nombre} name='potrero_nombre' onChange={(e) => handleChange(e)} />
				</div>
				<label>
					Tipo de Dispositivo:
					<select>
						<option value="COLLAR">COLLAR</option>
						<option value="CARAVANA">CARAVANA</option>
					</select>
				</label>
				<div>
					<label>Número de dispositivo:</label>
					<input type='text' value={input.dispositivo_nro} name='dispositivo_nro' onChange={(e) => handleChange(e)} />
				</div>
				<button type='submit' disabled={Object.keys(errors).length ? true : false} onClick={(e) => handleSubmit(e)}>
				{/* <button type='submit'> */}
					Guardar Datos del Animal
				</button>
				{errors.name && <p>{errors.name}</p>}
			</form>
		</div>
	)
}