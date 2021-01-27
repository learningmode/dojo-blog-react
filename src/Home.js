import {useState,useEffect} from 'react';
import BlogList from './BlogList';
const Home = ()=>{
  const [blogs,setBlogs]=useState(null);
  const[isPending,setIsPending]=useState(true);
  const[error,setError]= useState(null);

 const handleDelete = (id)=>{
     const newBlogs = blogs.filter((blog)=> blog.id !== id);
     setBlogs(newBlogs);
 }
//
useEffect(()=>{
  fetch('http://localhost:8000/blogss')
  .then(response =>{
    console.log(response);
    if(response.ok === true)
      return response.json()
    else {
      throw Error('Could not fetch data from the resource')
    }
  }).then(data=>{
    console.log(data)
    setBlogs(data);
    setIsPending(false);
    setError(null)
  })
  .catch(err =>{
        console.log(err.message)
        setIsPending(false)
        setError(err.message);
  })
},[])
  return (
    <div className="home">
    {isPending && <div>Loading Data...</div>}
    {blogs && <BlogList blogs={blogs} title="All Blogs!"  handleDelete={handleDelete}/>}
    {error && <div>{error}</div>}
    </div>
  )
}

export default Home;
