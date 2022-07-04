import { useState } from "react";
import Home from "./Home";
import Nav from "./Nav";
// import { Fade } from 'react-slideshow-image';



function MainPage() {
  const [type, setType] = useState("island");
  console.log(type);

  const handleClick = (e) => {
    setType(e.target.id);
  };
  return (
    <div>
        <Nav/>
        <hr className="hr"/>
      <div className="icons">
        <span>
          <img
            src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"
            width="24"
            height="24"
            id="island"
            onClick={handleClick}
          
          />
          <div>
            <span>Islands</span>
          </div>
        </span>
        <span>
          <img
            src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
            width="24"
            height="24"
            id="beach"
            onClick={handleClick}
          />
          <div>
            <span>Beach</span>
          </div>
        </span>
        <span>
          <img
            src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
            width="24"
            height="24"
            id="pools"
            onClick={handleClick}
          />
          <div>
            <span>Amazing pools</span>
          </div>
        </span>
        <span>
          <img
            src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
            width="24"
            height="24"
            id="omg"
            onClick={handleClick}
          />
          <div>
            <span>OMG!</span>
          </div>
        </span>
        <span>
          <img
            src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg"
            width="24"
            height="24"
            id="parks"
            onClick={handleClick}
          />
          <div>
            <span>National parks</span>
          </div>
        </span>
        <span>
          <img
            src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
            width="24"
            height="24"
            id="cabins"
            onClick={handleClick}
          />
          <div>
            <span>Cabins</span>
          </div>
        </span>
        <span>
          <img
            src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg"
            width="24"
            height="24"
            id="lakefront"
            onClick={handleClick}
          />
          <div>
            <span>Lakefront</span>
          </div>
        </span>
        <span>
          <img
            src="https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg"
            width="24"
            height="24"
            id="camping"
            onClick={handleClick}
          />
          <div>
            <span>Camping</span>
          </div>
        </span>
        <span>
          <img
            src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
            width="24"
            height="24"
            id="views"
            onClick={handleClick}
          />
          <div>
            <span>Amazing views</span>
          </div>
        </span>
        <span>
          <img
            src="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg"
            width="24"
            height="24"
            id="caves"
            onClick={handleClick}
          />
          <div>
          
            <span>Caves</span>
          </div>
        </span>
        
        
      </div>
      <br/>
      <Home type={type} />
    </div>
  );
}
export default MainPage;
