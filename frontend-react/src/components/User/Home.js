import { useEffect, useState } from "react";
import SlideShow from "./SlideShow";

import { AiFillStar } from 'react-icons/ai';


function Home({ type }) {
    

    const[stays, setStays] = useState([])
   

  console.log(type);
  const getStays = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/getStays/" + type);
    const data = await res.json();

     setStays(data.stays);
  

    return data;
  };

  const getAllStays = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/getAllStays");
    const data = await res.json();

     setStays(data.stays);
  

    return data;
  };
  

useEffect(() => {
    getStays();
},[type])
  


useEffect(() => {
    getStays();
},[])
  

  return (
  
  <div className="stays">
 {stays && stays.map((stay,i) =>(
        <div className="items" key={i}>

            <SlideShow src = {stay.pictures}/>
            <div className="description">
            <p className="info rating" >{stay.rating} <sub><AiFillStar/></sub> </p>
          <p className="info name" >{stay.name}</p>
          <p className="info" >{stay.distance}</p>
          <p className="info" >{stay.date}</p>
          <p className="info price" >{stay.price}</p>
          
        </div>
        </div>
    )
 )

 }
  
 
  </div>
  )
}
export default Home;
