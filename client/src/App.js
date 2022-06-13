import './App.css';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import React from 'react';
import Home from './components/Home/Home';
import AddAnimal from './components/AddAnimal/AddAnimal';
import EditAnimal from './components/EditAnimal/EditAnimal';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
     
        <Routes>
         <Route exact path="/" element={<Home />}></Route>
         <Route path="/addAnimal" element={<AddAnimal />}></Route>
         <Route path="/editAnimal/:id" element={<EditAnimal />}></Route>
        </Routes>
        
      </div>
    </BrowserRouter>
    
  )
}

export default App;
