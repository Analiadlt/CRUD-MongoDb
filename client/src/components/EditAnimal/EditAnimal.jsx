import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import { editAnimal, saveAnimal } from '../../redux/action/indexAction';
import { useDispatch, useSelector } from 'react-redux';
import styles from './EditAnimal.module.css';
import { validate } from '../Utils/utils';

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

	let { senasa_id, animal_tipo, peso_kg, potrero_nombre, dispositivo_tipo, dispositivo_nro } = data;

	function handleChange(e) {
		setData((prevData) => {
			const newValues = {
				...prevData,
				[e.target.name]: e.target.value
			}

			setErrors(validate(newValues));

			return newValues;
		});
	};

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(saveAnimal({ prevData, id }));

		alert('Data saved.');

		setData(prevData);
		navigate('/');
	}

	return (
		<div>
			<div className={styles.home}>
				<Link to='/'>Home</Link>
			</div>
			<div className={styles.container}>
				<h1>Edit Animal Data</h1>
				{/* <form> */}
				<div>
					<div className={styles.input}>
						<label>ID SENASA:</label>
						<input type='text' placeholder={senasa_id} className={styles.input_data} name='senasa_id' onChange={(e) => handleChange(e)} />
					</div>
					<div className={styles.input}>
						<label>
							Tipo de Animal:
							<select name='animal_tipo' onChange={(e) => handleChange(e)} className={styles.input_data}>
								<option placeholder="Novillo" selected={(animal_tipo === 'Novillo') ? true : false}>Novillo</option>
								<option placeholder="Toro" selected={(animal_tipo === 'Toro') ? true : false}>Toro</option>
								<option placeholder="Vaquillona" selected={(animal_tipo === 'Vaquillona') ? true : false}>Vaquillona</option>
							</select>
						</label>
					</div>
					<div className={styles.input}>
						<label>Peso animal (kg):</label>
						<input type='number' placeholder={peso_kg} name='peso_kg' onChange={(e) => handleChange(e)} className={styles.input_data} />
					</div>
					<div className={styles.input}>
						<label>Nombre de potrero:</label>
						<input type='text' placeholder={potrero_nombre} name='potrero_nombre' onChange={(e) => handleChange(e)} className={styles.input_data} />
						{errors.potrero_nombre && <p className={styles.errors}>{errors.name}</p>}
					</div>
					<div className={styles.input}>
						<label>
							Tipo de Dispositivo:
							<select name='dispositivo_tipo' onChange={(e) => handleChange(e)} className={styles.input_data}>
								<option placeholder="COLLAR" selected={(dispositivo_tipo === 'COLLAR') ? true : false}>COLLAR</option>
								<option placeholder="CARAVANA" selected={(dispositivo_tipo === 'CARAVANA') ? true : false}>CARAVANA</option>
							</select>
						</label>
					</div>
					<div className={styles.input}>
						<label>Número de dispositivo:</label>
						<input type='text' placeholder={dispositivo_nro} name='dispositivo_nro' onChange={(e) => handleChange(e)} className={styles.input_data} />
						{errors.dispositivo_nro && <p className={styles.errors}>{errors.name}</p>}
					</div>

					{/* </form> */}
				</div>
				<>
					<button type='submit' disabled={Object.keys(errors).length ? true : false} className={styles.button} onClick={(e) => handleSubmit(e)}>
						Update Animal Data
					</button>
				</>
				{errors.name && <p className={styles.campoErr}>{errors.name}</p>}

			</div>
		</div>
	)
}