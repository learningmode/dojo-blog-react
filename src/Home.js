const Home = ()=>{
  const handleClick=(e)=>{
    // e is event object
    return console.log("Hello REact Ninja",e);
  }
  const handleClickAgain=(name,e)=>{
    console.log("Hello",name,e.target);
  }
  return (
    <div className="home">
        <h2>Homepage</h2>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={(e)=>{handleClickAgain('Naruto',e)}}>Click Me Again</button>
    </div>
  )
}

export default Home;
