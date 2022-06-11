import './App.css';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import React from 'react';
import Home from './components/Home/Home';
import NewAnimal from './components/NewAnimal/NewAnimal';
// import AnimalDetail from './components/AnimalDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
     
        <Routes>
         <Route exact path="/" element={<Home />}></Route>
         <Route path="/addAnimal" element={<NewAnimal />}></Route>
         {/*<Route path="/home/:id" element={<AnimalDetail />}></Route> */}
        </Routes>
        
      </div>
    </BrowserRouter>
    
  )
}

export default App;
