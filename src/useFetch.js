// Custom hooks start with "use"
import {useState,useEffect} from 'react';

const useFetch =(url)=>{
  const [data,setData]=useState(null);
  const[isPending,setIsPending]=useState(true);
  const[error,setError]= useState(null);

  useEffect(()=>{
    const abortCont = new AbortController();
    console.log("URL",url);
    fetch(url,{signal:abortCont.signal})
    .then(response =>{
      console.log(response);
      if(response.ok === true)
        return response.json()
      else {
        throw Error('Could not fetch data from the resource')
      }
    }).then(data=>{
      console.log(data)
      setData(data);
      setIsPending(false);
      setError(null)
    })
    .catch(err =>{
          if(err.name ==='AbortError'){
          console.log('fetch aborted')
         }else{
           console.log(err.message)
           setIsPending(false)
           setError(err.message);
         }
    })

    return()=>abortCont.abort();
  },[url]);

  return{
    data,isPending,error
  }
}

export default useFetch;
