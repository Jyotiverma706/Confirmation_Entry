import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Confirmation from "./Confirmation";
import React, { useState } from "react";

function App() {
  const [details, setDetails] = useState({ name: "", Address: "", Phone: "" });
  function setName(event) {
    const entry = details;
    entry.name = event.target.value;
    setDetails(entry);
  }
  function setAddress(event) {
    const entry = details;
    entry.Address = event.target.value;
    setDetails(entry);
  }
  function setPhone(event) {
    const entry = details;
    entry.Phone = event.target.value;
    setDetails(entry);
  }
  function test() {
    console.log(details);
  }
  return (
    <Router>
      <form>
        <div>
          <h1>Entry Form</h1>
          <div>
            Entre Your Name:<br></br>
            <input type="text" onChange={setName}></input>
            <br></br>
            Address:<br></br>
            <input type="Text" onChange={setAddress}></input>
            <br></br>
            Phone Number:<br></br>
            <input typer="Number" onChange={setPhone}></input>
            <br></br>
            <br></br>
            <button onClick={test} className="button">
              <Link to="/Confirmation">Submit</Link>
            </button>
            <br></br>
          </div>
        </div>
        <Switch>
          <Route path="/Confirmation">
            <Confirmation details={details}></Confirmation>
          </Route>
        </Switch>
      </form>
    </Router>
  );
}
export default App;
