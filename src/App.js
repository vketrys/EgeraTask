import { useState } from 'react';
import "./App.css";
function App() {
  const [ email, setEmail ] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const validateEmail = (email) => Boolean(email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))

  const loginValidation = () => {
    return !validateEmail(email)
  };

  //i don't have enough time for making state and validation for all forms, but it's similair like this ^ 

  const validation = loginValidation()

  return (
    <div className="App">
     <div className="container">
      <div className="email">
        <div className="label">Email</div>
        <input type="email" value={email} onChange={handleEmail}></input>
      </div>
      <div className="card-info">
        <div className="card-number">
          <div className="label">Card information</div>
          <input type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="1234 1234 1234 1234" />
        </div>
        <div className="date-cvc">
          <input type="date" />
          <input type="text" placeholder="CVC"/>
        </div>
      </div>
      <div className="name">
        <div className="label">Name on card</div>
        <input type="text" />
      </div>
      <div className="country">
        <div className="label">Country and region</div>
        <select name="country">
          <option value="USA">United States</option>
          <option value="Ukraine">Ukraine</option>
          <option value="Poland">Poland</option>
        </select>
        <input type="tel" placeholder="ZIP"></input>
      </div>
      <div className="button">
        <button className="button" disabled={validation}>Pay</button>
      </div>
     </div>
    </div>
  );
}

export default App;
