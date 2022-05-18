
function App() {
  return (
    <div className="App">
        <div className="formCon">
          <h1>Expawts: Pet Relocation</h1>
          <p>Sign up below and we will send you a quote!</p>
          <form>
            <input placeholder="Name of Pet" />
            <select>
              <option selected disabled hidden>Species of Pet</option>
              <option>Canine</option>
              <option>Feline</option>
              <option>Equine</option>
              <option>Rodent</option>
              <option>Avian</option>
              <option>Reptile</option>
            </select>
            <select>
              <option selected disabled hidden>Gender/Sex of Pet</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <input placeholder="Age of Pet (years) " />
            <input placeholder="Pet MicroChip Id" />
            <input placeholder="Pet Owner Name" />
            <input placeholder="Pet Owner ID Number" />
            <input placeholder="Export Origin" />
            <input placeholder="Export Destination" />

            <button>Lets Export That Pet!</button>

            

          </form>

        </div>
    </div>
  );
}

export default App;
