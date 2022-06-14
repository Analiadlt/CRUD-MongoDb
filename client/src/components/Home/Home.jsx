import React from 'react';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAnimals, deleteAnimal } from '../../redux/action/indexAction';
import { Link } from 'react-router-dom';
// import store from '../../redux/store/store';
import styles from './Home.module.css';
import AllAnimal from '../AllAnimal/AllAnimal';


export default function Home() {
	// const dispatch = useDispatch();

	// const allAnimals = useSelector((state) => state.allAnimals);

	// // Can still subscribe to the store
	// store.subscribe(() => console.log(store.getState()));

	// useEffect(() => {
	// 	store.dispatch(getAnimals());
	// }, [dispatch]) 

	// function deleteClick(id) {
	// 	// e.preventDefault();
		
	// 	if (window.confirm("Do you really want to delete animal?")) {
	// 		dispatch(deleteAnimal(id));
	// 	  }
	// }

	return (
		<div className="App">
			<>
				<Link to='/addAnimal'>
					<button className={styles.boton}>Load a new animal</button>
				</Link>
			</>
			<AllAnimal />
		</div>
	)
}