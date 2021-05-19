import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks=['slman', 'sakira', 'sabnur', 'jolil', 'sakib']
  const products = [
    {name:'photoshop', price:'$99.99'},
    {name:'illustrator', price:'$45.99'},
    {name:'pdf reader', price:'$39.99'},
    {name:'premier elements', price:'$249.99'},
  
  
  ]


  const friends = [
    {friendsName:'jolil', age:'49'},
    {friendsName:'max', age:'35'},
    {friendsName:'mona', age:'29'},
    {friendsName:'vlad', age:'40'},
  

  ]
  
  const nayokNames = nayoks.map(nayok => nayok);
  console.log(nayokNames);

  return (
    <div className="App">
      <header className="App-header">
          <p>react person</p>     
          <Counter></Counter>
          <Users></Users>
          <ul>
            {
              nayoks.map(nayok => <li>{nayok}</li>)
            }

            {
              products.map(product => <li>{product.name}</li>)
            }

          </ul>

          <ul>
            {
              friends.map(friend => <li>{friend.friendsName} and age: {friend.age}</li> )
            }
          </ul>
          {
            products.map(pd => <Product product={pd}></Product>)
          }
          <Person name={nayoks[0]} nika="mousumi"></Person>  
          {/* in react for executing function a tag have to made with the same name as function */}

      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  console.log(count);
  const handleIncrease = () =>  setCount(count + 1);

  return(
    <div>
      <h1>Count: {count}</h1>
      
      <button onClick={() =>setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
      
    </div>
  )
}


function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic User: {users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'250px',
    width:'250px',
    float: 'left'
  }

  const {name, price} = props.product;

  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button>buy now</button>
    </div>
  )
}


function Person(props){             // in react function name should start with capital later
  const personStyle = {
    
    margin: '10px'
  }
  return (<div style={{backgroundColor:'pink', margin:'20px',  border: '2px solid red'}}>
   <p style={personStyle}>   Nayok: {props.name}</p>
   <p>  niyika: {props.nika}</p>
  </div>)
}

export default App;
