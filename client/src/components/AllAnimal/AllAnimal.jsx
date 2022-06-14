import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAnimals, deleteAnimal } from '../../redux/action/indexAction';
import { Link } from 'react-router-dom';
import store from '../../redux/store/store';
import styles from './AllAnimal.module.css';


export default function Home() {
    const dispatch = useDispatch();

    const allAnimals = useSelector((state) => state.allAnimals);

    // Can still subscribe to the store
    store.subscribe(() => console.log(store.getState()));

    useEffect(() => {
        store.dispatch(getAnimals());
    }, [dispatch])

    function deleteClick(id) {
        // e.preventDefault();

        if (window.confirm("Do you really want to delete animal?")) {
            dispatch(deleteAnimal(id));
        }
    }
    return (
        <div className={styles.tabla}>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID SENASA </th>
                            <th>Tipo Animal  </th>
                            <th>Peso (kg)   </th>
                            <th>Potrero   </th>
                            <th>Dispositivo   </th>
                            <th>N° Dispositivo   </th>
                        </tr>
                    </thead>
                    <tbody>
                        {allAnimals?.map((animal, index) => {
                            return (
                                <tr key={index}>
                                    <td>{animal.senasa_id} </td>
                                    <td>{animal.animal_tipo}  </td>
                                    <td>{animal.peso_kg}  </td>
                                    <td>{animal.potrero_nombre}  </td>
                                    <td>{animal.dispositivo_tipo}  </td>
                                    <td>{animal.dispositivo_nro}  </td>
                                    <td>
                                        <Link to={`/editAnimal/${animal._id}`}>
                                            <button>edit</button>
                                        </Link>
                                    </td>
                                    <td><button onClick={e => { return deleteClick(animal._id) }}>delete</button></td>
                                    {/* <td>
                            <img className="svg-icon" src="./assets/svg/edit.svg" alt="icono de edición"/>
                        </td> */}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}