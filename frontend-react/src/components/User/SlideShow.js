import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './SlideShow.css'
import { FaHeart } from 'react-icons/fa';

const SlideShow = ({src}) => {
    
    const [isLiked, setIsLiked] = useState(false);
   const [likeId, setLikeId] = useState("");
   
//   console.log(src[0].stay_id)
  const stay_id = src[0].stay_id;
  console.log("stay_id", stay_id);
//    setLikeId(src[0].stay_id)
//    console.log(likeId)

   const SaveToServer = async () => {
    try{
        const res = await fetch("http://127.0.0.1:8000/api/add_favorite", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
              stay_id: stay_id,
              user_id: 0,
            })
         }
        )
        const response = await res.json();
   
        if(response.status){
            alert(response.status);
        }
    }catch (err){
        console.log(err);
    }

    }

    const addToFavorite = (e) => {
        setIsLiked(!isLiked);
        console.log(e);
        SaveToServer();
    }

    return (
        <div className='slide '>
        <Slide>
            
        {src.map((pic,i) =>(
            
            
    <div className="each-slide-effect" key={i}>
        
    <div className="slidePic" style={{ 'backgroundImage': `url(${pic.picture})` }}>
      <p onClick={addToFavorite } className={!isLiked ? 'heartIcon' : 'heartIcon heartIconLiked'}><FaHeart/></p>  
        
    </div>
</div>
    )
 )

 }
        </Slide>
        </div>
    );
};

export default SlideShow;