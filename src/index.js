import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Item(props) {
  return (
    <div className="item">
      <b>Name : </b> {props.name} <br />
      <b>Price : $</b> {props.price}
    </div>
  );
}

function List() {
  return (
    <div>
      <Item 
        name="Cheese" 
        price="4.99" 
      />

      <Item 
        name="Bread" 
        price="2.05" />

      <Item 
        name="Ice cream" 
        price="3.99" 
      />

      <Item 
        name="Gateau cake" 
        price="7.99" 
      />

      <Item 
        name="Cholocate drink" 
        price="2.00" 
      />

      <Item 
        name="Soap" 
        price="0.99" 
      />

      <Item 
        name="Scissors" 
        price="1.99" 
      />

      <Item 
        name="School bag" 
        price="13.99" 
      />

      <Item 
        name="Eraser" 
        price="0.11" />
    </div>
  );
}

const con1 = <List />;

ReactDOM.render(
  <h1>My Item List</h1>, 
  document.getElementById('head')
);

ReactDOM.render(
  con1, 
  document.getElementById('root')
);
