import React from 'react'; 
import './App.css';
import ProductTable from './ProductTable';
import PropTypes from 'prop-types';

const products =[{
  price :'1500 000',
  name :'PC GAMER',
  category : {
    Electronics :'Electronic',
    Clothes: 'clothes',
  }
 } 
  ];


function App(props) {

	return  (

    <div className="App">

      <h1>hello</h1>
      

      {products.map(produit => <table>
        <tr>
         <td>
         <ProductTable el={produit } />
          </td>
         </tr>
         
          </table>
        
      )}
      </div>
  );
      }
  App.propTypes = {
    name: PropTypes.string,
  
    price: PropTypes.string,
  
    category: PropTypes.string
  };

export default App;
