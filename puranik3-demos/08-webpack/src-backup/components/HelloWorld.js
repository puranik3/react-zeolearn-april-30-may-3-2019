import React from 'react';
import './HelloWorld.css';

import GoldenGate from '../images/golden-gate.jpg';
import '../css/fonts.css';

import Products from '../data/products.json.js';
import Todos from '../data/todos.xml';

const HelloWorld = () => {
    console.log( Todos );
    return (
        <div className="welcome-message" style={ { fontFamily: 'Montserrat'} }>
            Hello Webpack!!
            <br />
            <img src={GoldenGate} />    
            <ul>
            {
                Products.map( product => <li key={product.id}>{product.name}</li> )
            }
            </ul>
        </div>
    );
};

export default HelloWorld;