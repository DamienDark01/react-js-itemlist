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
      <Item name="Cheese" price="4.99" />
      <Item name="Bread" price="2.05" />
      <Item name="Ice cream" price="3.99" />
    </div>
  );
}

const con1 = <List />;

ReactDOM.render(con1, document.getElementById('root'));
