import React, {useState} from "react";

const App = () => {

  const [fullName, setfullName] = useState({  // real-time fetching of event or value
    fname: "",
    lname: ""
  });

  const [finalName, setfinalName] = useState({  // fetches the value after submitting
    fname: "",
    lname: ""
  });

  const inputEvent = (event) => {
    setfullName((preValue) => {
      return {                    // stores the changing value in respective object
        ...preValue,            // brings and stores the changing value of previous states
        [event.target.name]: event.target.value,    // storing the real-time value in respective attribute
      }
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted");
    setfinalName(fullName);      // finalName takes all the values of fullName objects
  };
  

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmit}>
          <div>
            <h1>Hello, {finalName.fname} {finalName.lname} </h1>
            <input 
              type="text"
              placeholder="Enter Your First Name"
              name="fname"
              onChange={inputEvent}
              value={fullName.fname} />
              <br />
              <input 
              type="text"
              placeholder="Enter Your Last Name"
              name="lname"
              onChange={inputEvent}
              value={fullName.lname} />

              <button type="submit">Submit Here</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App;