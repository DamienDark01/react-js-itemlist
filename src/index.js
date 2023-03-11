import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { items } from './data';

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
    <div className="item-container">
      {items.map((item) => (
        <Item key={item.name} {...item} />
      ))}
    </div>
  );
}

const con1 = <List />;

createRoot(document.getElementById('head')).render(<h1>My Item List</h1>);

createRoot(document.getElementById('root')).render(con1);
