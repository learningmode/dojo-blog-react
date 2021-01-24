import {useState} from 'react';

const Home = ()=>{
  const [name,setName]= useState('Mario');
  const handleClick=(e)=>{
    // e is event object
    setName('Luigi');
    return console.log("Hello REact Ninja",e);
  }
  const handleClickAgain=(name,e)=>{
    console.log("Hello",name,e.target);
  }
  return (
    <div className="home">
        <h2>Homepage</h2>
        <p>{name}</p>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={(e)=>{handleClickAgain('Naruto',e)}}>Click Me Again</button>
    </div>
  )
}

export default Home;
