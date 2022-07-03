import { useEffect, useState } from "react";
import Header from "./Header";
import SlideShow from "./SlideShow";

function Home({ type }) {

    const[stays, setStays] = useState([])
   // console.log(stays)

  console.log(type);
  const getStays = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/getStays/" + type);
    const data = await res.json();

    // console.log(res);
  //   console.log(data.stays);
     setStays(data.stays);
   //  console.log(data.stays[3].pictures[0].picture)
   console.log(data.stays.pictures[0])

    return data;
  };
useEffect(() => {
    getStays();
},[type])
  

  return (
  
  <div className="stays">
 {stays.map((stay,i) =>(
        <div className="items">

            <SlideShow src = {stay.pictures}/>
            <div className="description">
          <p className="info name" key={i}>{stay.name}</p>
          <p className="info" key={i}>{stay.distance}</p>
          <p className="info" key={i}>{stay.date}</p>
          <p className="info price" key={i}>{stay.price}</p>
          <p className="info rating" key={i}>{stay.rating}</p>
        </div>
        </div>
    )
 )

 }
  
 
  </div>
  )
}
export default Home;
