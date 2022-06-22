import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url) {
  const [data,setData]= useState([]);
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(false);

  const getData=async()=>{
    try{
      setLoading(true);
      const {data:responseData}=await axios.get(url);
      setData(responseData.results);
    }catch(err){
      setError(err.message)
    }finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
    getData();
  },[]);
  
  return {data,loading,error};
}

export default useFetch;