import { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";

function AddStay() {
  // Initialize Input State
  const [name, setName] = useState("");
  const [distance, setDistance] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [type, setType] = useState("");
  const [pic1, setPic1] = useState("");
  const [pic2, setPic2] = useState("");
  const [pic3, setPic3] = useState("");
  
  const access_token = localStorage.getItem("access_token");
  const token_type = localStorage.getItem("token_type");

  const Add = async () => {
    
    const res = await fetch("http://127.0.0.1:8000/api/add_stay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token_type + access_token,
      },
      body: JSON.stringify({
        name: name,
        distance: distance,
        date: date,
        price: price,
        rating: rating,
        type: type,
        pic1: pic1,
        pic2: pic2,
        pic3: pic3,
      }),
    }, alert("Stay Added"),
    setName(""),
    setDistance(""),
    setDate(""),
    setPrice(""),
    setRating(""),
    setType(""),
    setPic1(""),
    setPic2(""),
    setPic3(""),);

  };



  const getFiles = (files) => {
    setPic1(files[0].base64);  
    setPic2(files[1].base64);
    setPic3(files[2].base64);
    
  };

  return (
    <div className="addStay">
      <div className="loginBox addStay" id="loginBox">
      
        <h6 className="title">Add Stay</h6>
        <div className="inputBox">
          <label className="logColor">Name</label>
          <input
            type="text"
            value={name}
            onInput={(e) => setName(e.target.value)}
          />

          <br />
          <label className="logColor">Distance</label>
          <input
            type="text"
            value={distance}
            onInput={(e) => setDistance(e.target.value)}
          />

          <br />
          <label className="logColor">Date</label>
          <input
            type="text"
            value={date}
            onInput={(e) => setDate(e.target.value)}
          />

          <br />
          <label className="logColor">Price</label>
          <input
            type="text"
            value={price}
            onInput={(e) => setPrice(e.target.value)}
          />

          <br />
          <label className="logColor">Rating</label>
          <input
            type="text"
            value={rating}
            onInput={(e) => setRating(e.target.value)}
          />
          <br />
          <label className="logColor">Type</label>
          <select
            class="stayTypes"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="island">islands</option>
            <option value="beach">Beach </option>
            <option value="pools">Amazing pools</option>
            <option value="omg">OMG!</option>
            <option value="parks">National parks</option>
            <option value="cabins">Cabins</option>
            <option value="lakefront">Lakefront</option>
            <option value="camping">Camping</option>
            <option value="views">Amazing Views</option>
            <option value="caves">Caves</option>
          </select>
          <br />
          <br />
          <label className="logColor">Add 3 Pictures</label>
          <div className="pics">

          <FileBase64
          multiple={true}
          onDone={(e) => {
            getFiles(e);
          }}
        />

          </div>

          <button
            className="log"
            onClick={() => {
              Add();
            }}
          >
            Add Stay
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddStay;
