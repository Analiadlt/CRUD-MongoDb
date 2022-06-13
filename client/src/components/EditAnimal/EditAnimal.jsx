import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import { editAnimal, saveAnimal } from '../../redux/action/indexAction';
import { useDispatch, useSelector } from 'react-redux';
import styles from './EditAnimal.module.css';

function validate(input) {
	let errors = {};
	if (!input.senasa_id) {
		errors.name = 'Please, insert an ID SENASA.'
	}

	// if (!input.types.length) {
	// 	errors.types='You must select a Type.'
	// }
	// if (input.img) {
	// 	if(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(input.img)) {
	//       errors.img='Invalid url.';
	// }}

	return errors;
}

export default function EditAnimal() {
	let { id } = useParams();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(editAnimal(id))
	}, [dispatch, id])

	const data = useSelector((state) => state.animal);

	const [errors, setErrors] = useState({});

	const [prevData, setData] = useState({});
	// const [info,setData] = useState(data);

	console.log('prev DATAAAAAAAAAA ', prevData, id)
	let { senasa_id, animal_tipo, peso_kg, potrero_nombre, dispositivo_tipo, dispositivo_nro } = data;

	function handleChange(e) {
		setData((prevData) => {
			const newValues = {
				...prevData,
				[e.target.name]: e.target.value
			}

			// setErrors(validate(newValues));

			return newValues;
		});
		console.log('data handleChange', { [e.target.name]: e.target.value })
	};

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(saveAnimal({ prevData, id }));
		alert('Los datos fueron almacenados.');
		// setInput(newInput)
		// setData(prevData);
		navigate('/');
	}

	return (
		<div >
			<Link to='/'><button>Volver</button></Link>
			<h1>Edit Animal Data</h1>
			{/* <form> */}
			<>
				<div>
					<label>ID SENASA:</label>
					<input type='text' placeholder={senasa_id} name='senasa_id' onChange={(e) => handleChange(e)} />
					{errors.senasa_id && <p className={styles.errors}>{errors.name}</p>}
				</div>
				<label>
					Tipo de Animal:
					<select name='animal_tipo' onChange={(e) => handleChange(e)} >
						<option value="Novillo" selected={(animal_tipo === 'Novillo')? true : false }>Novillo</option>
						<option value="Toro" selected={(animal_tipo === 'Toro')? true : false }>Toro</option>
						<option value="Vaquillona" selected={(animal_tipo === 'Vaquillona')? true : false }>Vaquillona</option>
					</select>
				</label>
				<div>
					<label>Peso animal (kg):</label>
					<input type='number' placeholder={peso_kg} name='peso_kg' onChange={(e) => handleChange(e)} />
				</div>
				<div>
					<label>Nombre de potrero:</label>
					<input type='text' placeholder={potrero_nombre} name='potrero_nombre' onChange={(e) => handleChange(e)} />
					{errors.potrero_nombre && <p className={styles.errors}>{errors.name}</p>}
				</div>
				<label>
					Tipo de Dispositivo:
					<select name='dispositivo_tipo' onChange={(e) => handleChange(e)} >
						<option value="COLLAR" selected={(dispositivo_tipo === 'COLLAR')? true : false }>COLLAR</option>
						<option value="CARAVANA" selected={(dispositivo_tipo === 'CARAVANA')? true : false }>CARAVANA</option>
					</select>
				</label>
				<div>
					<label>Número de dispositivo:</label>
					<input type='text' placeholder={dispositivo_nro} name='dispositivo_nro' onChange={(e) => handleChange(e)} />
					{errors.dispositivo_nro && <p className={styles.errors}>{errors.name}</p>}
				</div>
				{/* <button type='submit' disabled={Object.keys(errors).length? true : false}> */}
				<button type='submit' onClick={(e) => handleSubmit(e)}>
					Update Animal Data
				</button>
				{/* </form> */}
			</>
		</div>
	)
}