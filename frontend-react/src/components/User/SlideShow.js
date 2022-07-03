import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './SlideShow.css'

const SlideShow = ({src}) => {
    console.log(src);

    return (
        <div className='slide'>
        <Slide>
            
        {src.map((pic,i) =>(
    <div className="each-slide-effect">
    <div style={{ 'backgroundImage': `url(${pic.picture})` }}>
        
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