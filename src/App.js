import axios from "axios";
import { useState } from "react";

function App() {

  // store info in object
  const [inputs, setInputs] = useState({});

  // handle changes to inputs
  // store values
  const handleChange = (event) => {
    //get the name and value and store it
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]:value}));
  }

  // take data and send
  const handleSubmit = (event) => {
    // prevent paage from refreshing
    event.preventDefault();
    console.log(inputs);

    axios.post('http://localhost:8888/assessmentOneApi/addPet', inputs)
    .then(function(res){
      console.log(res);
    });

  }

  // send inputs to script

  return (
    <div className="App">
        <div className="formCon">
          <h1>Expawts: Pet Relocation</h1>
          <p>Sign up below and we will send you a quote!</p>
          {/* identify attribute using name=" " */}
          <form>
            <input name="petName" type="text" placeholder="Name of Pet" onChange={handleChange}/>
            <select name="species" onChange={handleChange}>
              <option selected disabled hidden>Species of Pet</option>
              <option>Canine</option>
              <option>Feline</option>
              <option>Equine</option>
              <option>Rodent</option>
              <option>Avian</option>
              <option>Reptile</option>
            </select>
            <select name="gender" onChange={handleChange}>
              <option selected disabled hidden>Gender/Sex of Pet</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <input name="petAge" type="number" placeholder="Age of Pet (years) " onChange={handleChange}/>
            <input name="microChip" type="number" placeholder="Pet MicroChip Id" onChange={handleChange}/>
            <input name="ownerName" type="text" placeholder="Pet Owner Name" onChange={handleChange}/>
            <input name="ownerID" type="number" placeholder="Pet Owner ID Number" onChange={handleChange}/>
            <input name="origin" type="text" placeholder="Export Origin" onChange={handleChange}/>
            <input name="export" type="text" placeholder="Export Destination" onChange={handleChange}/>

            <button onClick={handleSubmit}>Lets Export That Pet!</button>

          </form>

        </div>
    </div>
  );
}

export default App;
