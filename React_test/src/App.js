import React from 'react'
import Banner from './components/Banner'
// import Cart from './components/Cart'
import ShoppingList from'./components/ShoppingList'
import './App.css';


function App() {
        return (
          <div className="App">
            <Banner/>
            {/* <Cart/> */}
            <ShoppingList/>
          </div>
        );
      }

export default App;
