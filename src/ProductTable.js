import React from 'react';

const ProductTable = ({el}) => {
    return (
        <div>
            
                    <p> {"name of product"+el.name}  {"price is"+el.price}  {"category is"+el.category}</p>

 
                
            </div>
    );
}
export default ProductTable;

