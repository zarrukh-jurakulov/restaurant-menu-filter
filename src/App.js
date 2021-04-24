import React, { useState, useEffect } from 'react';
import Buttons from './components/Buttons';
import SearchInput from './components/SearchInput';
import products from './components/data';
import Card from './components/Card'
import './App.css';


function App() {
  const [homeState, setHomeState] = useState(products)
  const [input, setInput] = useState('')
  useEffect(() => {
    setHomeState(products)
  }, [setHomeState])
  
    const allProductsBtn = () => {
      setHomeState(products)
    }

    const cakesBtn = () => {
      const cakes = products.filter((i)=>i.category === 'CAKES')
     setHomeState(cakes)
    }

    const cupcakesBtn = () => {
      const cupcakes = products.filter((i)=>i.category === 'CUPCAKES')
      setHomeState(cupcakes)
    }

    const sweetsBtn = () => {
      const sweets = products.filter((i)=> i.category === 'SWEETS')
      setHomeState(sweets)
    }

    const doughnutsBtn = () => {
      const doughnuts = products.filter((i)=> i.category === 'DOUGHNUTS')
      setHomeState(doughnuts)
    }

    const handleSearchInput = (event) => {
      event.preventDefault()
      setInput(event.target.value)
      const searchVal = homeState.filter((i)=> i.name.match(input))
      setHomeState(searchVal)
    }
       

    
    

  return (
    <div className="App">
     <h1>Our Store</h1>
     <div className='buttons'>
      <Buttons onClick={allProductsBtn}  text="All"/>
      <Buttons onClick={cakesBtn}  text="CAKES" />
      <Buttons onClick={cupcakesBtn}  text="CUPCAKES" />
      <Buttons onClick={sweetsBtn}  text="SWEETS" />
      <Buttons onClick={doughnutsBtn}  text="DOUGHNUTS" />
     </div>
     
     <div className='searchInput'>
       <SearchInput onChange={handleSearchInput} value={input} />
     </div>
     
     <div className='products'>
      {homeState.map(i=><Card key={i.name} id={i.id} image={i.image} name={i.name} price={i.price}  />)}
     </div>
    </div>
  );
}

export default App;
